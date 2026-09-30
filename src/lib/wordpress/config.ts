import type { WordPressReadConfig } from "./types";

const DEFAULT_POSTS_ENDPOINT = "wp/v2/posts";
const DEFAULT_PAGES_ENDPOINT = "wp/v2/pages";
const DEFAULT_MEDIA_ENDPOINT = "wp/v2/media";

const normalizeEndpoint = (endpoint: string) =>
  endpoint.trim().replace(/^\/+/, "").replace(/^wp-json\//, "");

export const getWordPressReadConfig = (): WordPressReadConfig | null => {
  const baseUrl = import.meta.env.VITE_WP_API_BASE_URL?.trim();

  if (!baseUrl) {
    return null;
  }

  const postsEndpoint = normalizeEndpoint(
    import.meta.env.VITE_WP_POSTS_ENDPOINT || DEFAULT_POSTS_ENDPOINT,
  );

  return {
    baseUrl: baseUrl.replace(/\/$/, ""),
    postsEndpoint,
    pagesEndpoint: normalizeEndpoint(import.meta.env.VITE_WP_PAGES_ENDPOINT || DEFAULT_PAGES_ENDPOINT),
    mediaEndpoint: normalizeEndpoint(import.meta.env.VITE_WP_MEDIA_ENDPOINT || DEFAULT_MEDIA_ENDPOINT),
  };
};

export const buildWordPressApiUrl = (
  config: WordPressReadConfig,
  query: Record<string, string | number | boolean | undefined> = {},
  endpoint = config.postsEndpoint,
): URL => {
  const url = new URL(`${config.baseUrl}/wp-json/${endpoint}`);

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  return url;
};
