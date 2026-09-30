import { existsSync } from "node:fs";
import path from "node:path";
import { createWordPressContentSource } from "./lib/wordpress-content-source";
import { getMigrationConfigFromEnv, WordPressMigrationClient } from "./lib/wordpress-migration-client";

type Summary = { created: number; updated: number; skipped: number; mediaUploaded: number; mediaReused: number; failed: number };
const isDryRun = !process.argv.includes("--no-dry-run") && process.env.WP_MIGRATION_DRY_RUN !== "false";
const skipExisting = process.argv.includes("--skip-existing");
const log = (message: string) => console.log(`[wordpress-migration] ${message}`);

const escapeMarkerValue = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const replaceMediaReferences = (content: string, mediaUrls: Map<string, string>) => {
  let result = content;
  for (const [key, url] of mediaUrls) {
    result = result.replaceAll(`"${key}"`, JSON.stringify(url));
    result = result.replaceAll(`&quot;${escapeMarkerValue(key)}&quot;`, `&quot;${escapeMarkerValue(url)}&quot;`);
  }
  return result.replace(/"pdfKey":("[^"]+")/g, '"pdfUrl":$1').replaceAll("&quot;pdfKey&quot;", "&quot;pdfUrl&quot;");
};

const run = async () => {
  const source = createWordPressContentSource();
  const summary: Summary = { created: 0, updated: 0, skipped: 0, mediaUploaded: 0, mediaReused: 0, failed: 0 };
  const mediaUrls = new Map<string, string>();
  const mediaIds = new Map<string, number>();
  log(`${isDryRun ? "dry run" : "write run"}: ${source.media.length} media items, ${source.content.length} content records`);
  if (isDryRun) {
    source.media.forEach((item) => log(`would upload/reuse media: ${item.key} (${path.relative(process.cwd(), item.filePath)})`));
    source.content.forEach((item) => log(`would upsert ${item.kind}: ${item.slug}`));
    return summary;
  }

  const client = new WordPressMigrationClient(getMigrationConfigFromEnv());
  for (const item of source.media) {
    if (!existsSync(item.filePath)) { summary.failed += 1; log(`missing media: ${item.filePath}`); continue; }
    try {
      log(`checking media: ${item.key}`);
      const existing = await client.list(client.endpoints.media, { search: path.basename(item.filePath), per_page: 20, context: "edit" });
      const match = existing.find((record) => String(record.source_url || "").includes(path.basename(item.filePath)));
      if (match?.source_url) {
        mediaUrls.set(item.key, String(match.source_url));
        if (typeof match.id === "number") mediaIds.set(item.key, match.id);
        summary.mediaReused += 1;
        continue;
      }
      const uploaded = await client.uploadMedia(item.filePath, item.title);
      if (uploaded.source_url) mediaUrls.set(item.key, String(uploaded.source_url));
      if (typeof uploaded.id === "number") mediaIds.set(item.key, uploaded.id);
      summary.mediaUploaded += 1;
    } catch (error) { summary.failed += 1; log(`media failed (${item.key}): ${error instanceof Error ? error.message : String(error)}`); }
  }

  const categoryIds = new Map<string, number>();
  for (const category of new Set(source.content.map((item) => item.category).filter(Boolean) as string[])) {
    const record = await client.ensureCategory(category);
    if (record.id) categoryIds.set(category, record.id);
  }

  for (const item of source.content) {
    try {
      const endpoint = item.kind === "page" ? client.endpoints.pages : client.endpoints.posts;
      const existing = await client.getBySlug(endpoint, item.slug);
      if (existing && skipExisting) { summary.skipped += 1; continue; }
      const body: Record<string, unknown> = {
        slug: item.slug, title: item.title, status: "publish", content: replaceMediaReferences(item.content, mediaUrls),
        ...(item.excerpt ? { excerpt: item.excerpt } : {}),
        ...(item.category && categoryIds.has(item.category) ? { categories: [categoryIds.get(item.category)] } : {}),
        ...(item.mediaKey && mediaIds.has(item.mediaKey) ? { featured_media: mediaIds.get(item.mediaKey) } : {}),
      };
      const saved = existing ? await client.update(endpoint, Number(existing.id), body) : await client.create(endpoint, body);
      if (existing) summary.updated += 1; else summary.created += 1;
    } catch (error) { summary.failed += 1; log(`content failed (${item.slug}): ${error instanceof Error ? error.message : String(error)}`); }
  }
  log(`summary: ${JSON.stringify(summary)}`);
  if (summary.failed) process.exitCode = 1;
};

run().catch((error) => { console.error(`[wordpress-migration] fatal: ${error instanceof Error ? error.message : String(error)}`); process.exitCode = 1; });
