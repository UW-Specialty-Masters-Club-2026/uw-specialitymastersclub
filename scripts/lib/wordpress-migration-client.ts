import { readFile } from "node:fs/promises";
import path from "node:path";

export type RetryOptions = {
  maxRetries?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  jitterRatio?: number;
  requestSpacingMs?: number;
  requestTimeoutMs?: number;
  sleep?: (ms: number) => Promise<void>;
  random?: () => number;
};

export type MigrationConfig = {
  baseUrl: string;
  username: string;
  appPassword: string;
  postsEndpoint?: string;
  pagesEndpoint?: string;
  categoriesEndpoint?: string;
  mediaEndpoint?: string;
  retry?: RetryOptions;
};

export type WordPressRecord = Record<string, unknown> & { id?: number; slug?: string };

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export const isRetryableStatus = (status: number) => status === 408 || status === 429 || status >= 500;

export const getRetryAfterMs = (headers: Headers, now = new Date()) => {
  const value = headers.get("retry-after");
  if (!value) return undefined;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const date = Date.parse(value);
  return Number.isNaN(date) ? undefined : Math.max(0, date - now.getTime());
};

export const calculateBackoffDelay = (attempt: number, options: RetryOptions = {}) => {
  const base = options.baseDelayMs ?? 500;
  const max = options.maxDelayMs ?? 30000;
  const jitterRatio = options.jitterRatio ?? 0.2;
  const random = options.random ?? Math.random;
  const exponential = Math.min(max, base * 2 ** attempt);
  const jitter = exponential * jitterRatio * (random() * 2 - 1);
  return Math.max(0, Math.min(max, Math.round(exponential + jitter)));
};

export const sanitizeErrorMessage = (message: string, secret?: string) => {
  if (!secret) return message;
  return message.split(secret).join("[redacted]");
};

const normalizeEndpoint = (endpoint: string, fallback: string) =>
  (endpoint || fallback).trim().replace(/^\/+/, "").replace(/^wp-json\//, "");

export const getMigrationConfigFromEnv = (): MigrationConfig => {
  const required = (name: string) => {
    const value = process.env[name]?.trim();
    if (!value) throw new Error(`${name} is required for WordPress migration`);
    return value;
  };

  return {
    baseUrl: required("WP_MIGRATION_BASE_URL").replace(/\/$/, ""),
    username: required("WP_MIGRATION_USERNAME"),
    appPassword: required("WP_MIGRATION_APP_PASSWORD"),
    postsEndpoint: normalizeEndpoint(process.env.WP_MIGRATION_POSTS_ENDPOINT || "", "wp/v2/posts"),
    pagesEndpoint: normalizeEndpoint(process.env.WP_MIGRATION_PAGES_ENDPOINT || "", "wp/v2/pages"),
    categoriesEndpoint: normalizeEndpoint(process.env.WP_MIGRATION_CATEGORIES_ENDPOINT || "", "wp/v2/categories"),
    mediaEndpoint: normalizeEndpoint(process.env.WP_MIGRATION_MEDIA_ENDPOINT || "", "wp/v2/media"),
  };
};

export class WordPressMigrationClient {
  private readonly config: Required<Omit<MigrationConfig, "retry">> & { retry: Required<RetryOptions> };
  private nextRequestAt = 0;

  constructor(config: MigrationConfig) {
    this.config = {
      ...config,
      postsEndpoint: normalizeEndpoint(config.postsEndpoint || "", "wp/v2/posts"),
      pagesEndpoint: normalizeEndpoint(config.pagesEndpoint || "", "wp/v2/pages"),
      categoriesEndpoint: normalizeEndpoint(config.categoriesEndpoint || "", "wp/v2/categories"),
      mediaEndpoint: normalizeEndpoint(config.mediaEndpoint || "", "wp/v2/media"),
      retry: {
        maxRetries: config.retry?.maxRetries ?? 5,
        baseDelayMs: config.retry?.baseDelayMs ?? 750,
        maxDelayMs: config.retry?.maxDelayMs ?? 30000,
        jitterRatio: config.retry?.jitterRatio ?? 0.25,
        requestSpacingMs: config.retry?.requestSpacingMs ?? 350,
        requestTimeoutMs: config.retry?.requestTimeoutMs ?? 20000,
        sleep: config.retry?.sleep ?? sleep,
        random: config.retry?.random ?? Math.random,
      },
    };
  }

  private url(endpoint: string, query: Record<string, string | number | boolean | undefined> = {}) {
    const url = new URL(`${this.config.baseUrl}/wp-json/${endpoint}`);
    Object.entries(query).forEach(([key, value]) => value !== undefined && url.searchParams.set(key, String(value)));
    return url;
  }

  private async waitForSpacing() {
    const now = Date.now();
    const delay = Math.max(0, this.nextRequestAt - now);
    if (delay) await this.config.retry.sleep(delay);
    this.nextRequestAt = Date.now() + this.config.retry.requestSpacingMs;
  }

  private async request<T>(endpoint: string, init: RequestInit = {}, query: Record<string, string | number | boolean | undefined> = {}): Promise<T> {
    const auth = Buffer.from(`${this.config.username}:${this.config.appPassword}`).toString("base64");
    let attempt = 0;
    while (true) {
      await this.waitForSpacing();
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), this.config.retry.requestTimeoutMs);
        const response = await fetch(this.url(endpoint, query), {
          ...init,
          signal: controller.signal,
          headers: { Authorization: `Basic ${auth}`, ...(init.headers || {}) },
        });
        clearTimeout(timeout);
        if (response.ok) return (await response.json()) as T;
        const retryable = isRetryableStatus(response.status) && attempt < this.config.retry.maxRetries;
        if (!retryable) {
          const body = await response.text();
          throw new Error(sanitizeErrorMessage(`WordPress migration request failed (${response.status}): ${body.slice(0, 300)}`, this.config.appPassword));
        }
        const retryAfter = getRetryAfterMs(response.headers);
        await this.config.retry.sleep(retryAfter ?? calculateBackoffDelay(attempt, this.config.retry));
        attempt += 1;
      } catch (error) {
        if (error instanceof Error && /WordPress migration request failed \(/.test(error.message)) throw error;
        if (attempt >= this.config.retry.maxRetries) {
          throw new Error(sanitizeErrorMessage(`WordPress migration request failed after ${attempt + 1} attempts: ${error instanceof Error ? error.message : String(error)}`, this.config.appPassword));
        }
        await this.config.retry.sleep(calculateBackoffDelay(attempt, this.config.retry));
        attempt += 1;
      }
    }
  }

  async list(endpoint: string, query: Record<string, string | number | boolean | undefined> = {}) {
    return this.request<WordPressRecord[]>(endpoint, {}, query);
  }

  async getBySlug(endpoint: string, slug: string) {
    const records = await this.list(endpoint, { slug, per_page: 1, context: "edit" });
    return records[0] || null;
  }

  async create(endpoint: string, body: WordPressRecord) {
    return this.request<WordPressRecord>(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  }

  async update(endpoint: string, id: number, body: WordPressRecord) {
    return this.request<WordPressRecord>(`${endpoint}/${id}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  }

  async ensureCategory(name: string, slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) {
    const records = await this.list(this.config.categoriesEndpoint, { slug, per_page: 1, context: "edit" });
    return records[0] || this.create(this.config.categoriesEndpoint, { name, slug });
  }

  async uploadMedia(filePath: string, title?: string) {
    const filename = path.basename(filePath);
    const body = await readFile(filePath);
    return this.request<WordPressRecord>(this.config.mediaEndpoint, {
      method: "POST",
      headers: { "Content-Disposition": `attachment; filename="${filename}"`, "Content-Type": "application/octet-stream", ...(title ? { "X-WP-Title": title } : {}) },
      body,
    });
  }

  async setFeaturedMedia(endpoint: string, id: number, mediaId: number) {
    return this.update(endpoint, id, { featured_media: mediaId });
  }

  get endpoints() {
    return { posts: this.config.postsEndpoint, pages: this.config.pagesEndpoint, categories: this.config.categoriesEndpoint, media: this.config.mediaEndpoint };
  }
}
