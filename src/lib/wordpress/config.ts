import type { WordPressReadConfig } from "./types";

const DEFAULT_POSTS_ENDPOINT = "wp/v2/posts";

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
  };
};

export const buildWordPressApiUrl = (
  config: WordPressReadConfig,
  query: Record<string, string | number | boolean | undefined> = {},
): URL => {
  const url = new URL(`${config.baseUrl}/wp-json/${config.postsEndpoint}`);

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  return url;
};
