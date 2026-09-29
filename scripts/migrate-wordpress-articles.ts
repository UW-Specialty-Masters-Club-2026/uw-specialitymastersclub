/* eslint-env node */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ARTICLE_IMAGE_ASSET_PATHS } from "../src/data/articleImageAssets";
import { articles } from "../src/data/articles";
import { contentBlocksToWordPressHtml } from "../src/lib/wordpress/contentBlocks";

type WordPressCategory = {
  id: number;
  name: string;
  slug: string;
};

type WordPressMedia = {
  id: number;
  source_url: string;
};

type WordPressPost = {
  id: number;
  slug: string;
};

type MigrationConfig = {
  baseUrl: string;
  postsEndpoint: string;
  categoriesEndpoint: string;
  mediaEndpoint: string;
  username?: string;
  appPassword?: string;
  dryRun: boolean;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const monthMap: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

const normalizeEndpoint = (endpoint: string) =>
  endpoint.trim().replace(/^\/+/, "").replace(/^wp-json\//, "");

const parseDate = (value: string): string | undefined => {
  const [monthRaw, yearRaw] = value.trim().split(/\s+/);
  if (!monthRaw || !yearRaw) {
    return undefined;
  }

  const month = monthMap[monthRaw.toLowerCase()];
  const year = Number(yearRaw);
  if (!month || !Number.isFinite(year)) {
    return undefined;
  }

  return new Date(Date.UTC(year, month - 1, 1, 12, 0, 0)).toISOString();
};

const getMimeType = (filename: string): string => {
  const ext = path.extname(filename).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "application/octet-stream";
};

const getAuthHeader = (config: MigrationConfig): string => {
  if (!config.username || !config.appPassword) {
    throw new Error(
      "Missing write credentials. Set WP_MIGRATION_USERNAME and WP_MIGRATION_APP_PASSWORD.",
    );
  }

  const token = Buffer.from(`${config.username}:${config.appPassword}`).toString("base64");
  return `Basic ${token}`;
};

const buildEndpointUrl = (
  config: MigrationConfig,
  endpoint: string,
  query: Record<string, string | number | undefined> = {},
): URL => {
  const url = new URL(`${config.baseUrl}/wp-json/${endpoint}`);

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  return url;
};

const requestJson = async <T>(
  url: URL,
  init: RequestInit = {},
): Promise<{ data: T; headers: Headers }> => {
  const response = await fetch(url.toString(), init);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Request failed (${response.status} ${response.statusText}): ${body}`);
  }

  const data = (await response.json()) as T;
  return { data, headers: response.headers };
};

const fetchAllCategories = async (config: MigrationConfig): Promise<WordPressCategory[]> => {
  const results: WordPressCategory[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const url = buildEndpointUrl(config, config.categoriesEndpoint, {
      per_page: 100,
      page,
      hide_empty: 0,
    });

    const { data, headers } = await requestJson<WordPressCategory[]>(url);
    results.push(...data);
    totalPages = Number(headers.get("x-wp-totalpages") || "1");
    page += 1;
  } while (page <= totalPages);

  return results;
};

const ensureCategory = async (
  config: MigrationConfig,
  authHeader: string,
  categoriesCache: Map<string, WordPressCategory>,
  categoryName: string,
): Promise<number | undefined> => {
  const cacheKey = categoryName.toLowerCase();
  const existing = categoriesCache.get(cacheKey);
  if (existing) {
    return existing.id;
  }

  if (config.dryRun) {
    console.log(`[dry-run] Would create category: ${categoryName}`);
    return undefined;
  }

  const url = buildEndpointUrl(config, config.categoriesEndpoint);
  const slug = categoryName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const { data } = await requestJson<WordPressCategory>(url, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: categoryName, slug }),
  });

  categoriesCache.set(cacheKey, data);
  return data.id;
};

const findMediaBySlug = async (
  config: MigrationConfig,
  authHeader: string,
  slug: string,
): Promise<WordPressMedia | null> => {
  const url = buildEndpointUrl(config, config.mediaEndpoint, {
    per_page: 1,
    slug,
  });

  const { data } = await requestJson<WordPressMedia[]>(url, {
    headers: {
      Authorization: authHeader,
    },
  });

  return data[0] || null;
};

const uploadMedia = async (
  config: MigrationConfig,
  authHeader: string,
  sourceKey: string,
  altText: string,
): Promise<WordPressMedia | null> => {
  if (/^https?:\/\//i.test(sourceKey)) {
    return { id: 0, source_url: sourceKey };
  }

  const relativePath = ARTICLE_IMAGE_ASSET_PATHS[sourceKey];
  if (!relativePath) {
    console.warn(`No local asset mapping found for image key: ${sourceKey}`);
    return null;
  }

  const existing = await findMediaBySlug(config, authHeader, sourceKey);
  if (existing) {
    return existing;
  }

  if (config.dryRun) {
    console.log(`[dry-run] Would upload media: ${sourceKey} (${relativePath})`);
    return {
      id: 0,
      source_url: `dry-run://${sourceKey}`,
    };
  }

  const absolutePath = path.resolve(repoRoot, relativePath);
  const file = await fs.readFile(absolutePath);
  const filename = path.basename(absolutePath);

  const uploadUrl = buildEndpointUrl(config, config.mediaEndpoint);
  const uploadResponse = await fetch(uploadUrl.toString(), {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Type": getMimeType(filename),
    },
    body: file,
  });

  if (!uploadResponse.ok) {
    const body = await uploadResponse.text();
    throw new Error(`Media upload failed for ${sourceKey}: ${uploadResponse.status} ${body}`);
  }

  const uploaded = (await uploadResponse.json()) as WordPressMedia;

  const updateUrl = buildEndpointUrl(config, `${config.mediaEndpoint}/${uploaded.id}`);
  await requestJson(updateUrl, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      alt_text: altText,
      slug: sourceKey,
      title: sourceKey,
    }),
  });

  const refreshed = await findMediaBySlug(config, authHeader, sourceKey);
  return refreshed || uploaded;
};

const findPostBySlug = async (
  config: MigrationConfig,
  authHeader: string,
  slug: string,
): Promise<WordPressPost | null> => {
  const url = buildEndpointUrl(config, config.postsEndpoint, {
    per_page: 1,
    slug,
    context: "edit",
  });

  const { data } = await requestJson<WordPressPost[]>(url, {
    headers: {
      Authorization: authHeader,
    },
  });

  return data[0] || null;
};

const parseBoolean = (value?: string): boolean | undefined => {
  if (!value) return undefined;
  if (["1", "true", "yes", "y"].includes(value.toLowerCase())) return true;
  if (["0", "false", "no", "n"].includes(value.toLowerCase())) return false;
  return undefined;
};

const parseArgs = () => {
  const args = new Set(process.argv.slice(2));
  const forceDryRun = args.has("--dry-run");
  const disableDryRun = args.has("--no-dry-run");

  return {
    forceDryRun,
    disableDryRun,
  };
};

const createConfig = (): MigrationConfig => {
  const { forceDryRun, disableDryRun } = parseArgs();

  const envDryRun = parseBoolean(process.env.WP_MIGRATION_DRY_RUN);
  const dryRun = disableDryRun ? false : forceDryRun || envDryRun !== false;

  const baseUrl = process.env.WP_MIGRATION_BASE_URL?.trim();
  if (!baseUrl) {
    throw new Error("Missing WP_MIGRATION_BASE_URL.");
  }

  return {
    baseUrl: baseUrl.replace(/\/$/, ""),
    postsEndpoint: normalizeEndpoint(process.env.WP_MIGRATION_POSTS_ENDPOINT || "wp/v2/posts"),
    categoriesEndpoint: normalizeEndpoint(
      process.env.WP_MIGRATION_CATEGORIES_ENDPOINT || "wp/v2/categories",
    ),
    mediaEndpoint: normalizeEndpoint(process.env.WP_MIGRATION_MEDIA_ENDPOINT || "wp/v2/media"),
    username: process.env.WP_MIGRATION_USERNAME,
    appPassword: process.env.WP_MIGRATION_APP_PASSWORD,
    dryRun,
  };
};

const migrate = async () => {
  const config = createConfig();
  const authHeader = getAuthHeader(config);

  console.log(`Starting WordPress migration (${config.dryRun ? "dry-run" : "write"} mode)`);
  console.log(`Base URL: ${config.baseUrl}`);
  console.log(`Posts endpoint: ${config.postsEndpoint}`);

  const categories = await fetchAllCategories(config);
  const categoriesCache = new Map<string, WordPressCategory>(
    categories.map((category) => [category.name.toLowerCase(), category]),
  );

  for (const article of articles) {
    const categoryId = await ensureCategory(
      config,
      authHeader,
      categoriesCache,
      article.category,
    );

    const heroMedia = await uploadMedia(
      config,
      authHeader,
      article.heroImage,
      `${article.title} hero image`,
    );

    const blockImageUploads = await Promise.all(
      article.content
        .filter((block) => block.type === "image" && block.src)
        .map(async (block) => {
          const media = await uploadMedia(
            config,
            authHeader,
            block.src as string,
            block.alt || "Article image",
          );
          return {
            sourceKey: block.src as string,
            media,
          };
        }),
    );

    const imageUrlByKey = new Map<string, string>();
    for (const upload of blockImageUploads) {
      if (upload.media?.source_url) {
        imageUrlByKey.set(upload.sourceKey, upload.media.source_url);
      }
    }

    const contentHtml = contentBlocksToWordPressHtml(article.content, {
      meta: {
        author: article.author,
        authorAvatar: article.authorAvatar,
        colabLink: article.colabLink,
      },
      resolveImageSrc: (src) => imageUrlByKey.get(src) || src,
    });

    const payload: Record<string, unknown> = {
      title: article.title,
      slug: article.id,
      excerpt: article.subtitle,
      content: contentHtml,
      status: "publish",
    };

    const parsedDate = parseDate(article.date);
    if (parsedDate) {
      payload.date = parsedDate;
    }

    if (categoryId) {
      payload.categories = [categoryId];
    }

    if (heroMedia?.id) {
      payload.featured_media = heroMedia.id;
    }

    const existing = await findPostBySlug(config, authHeader, article.id);

    if (config.dryRun) {
      console.log(
        `[dry-run] Would ${existing ? "update" : "create"} post slug=${article.id} title="${article.title}"`,
      );
      continue;
    }

    const endpoint = existing
      ? `${config.postsEndpoint}/${existing.id}`
      : config.postsEndpoint;

    const url = buildEndpointUrl(config, endpoint);
    await requestJson(url, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log(`${existing ? "Updated" : "Created"} post: ${article.id}`);
  }

  console.log("Migration completed.");
};

migrate().catch((error) => {
  console.error("Migration failed:", error);
  process.exitCode = 1;
});
