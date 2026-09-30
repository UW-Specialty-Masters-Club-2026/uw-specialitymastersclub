import { buildWordPressApiUrl } from "./config";
import type { WordPressPage, WordPressPost, WordPressReadConfig } from "./types";

const requestWordPressJson = async <T>(url: URL): Promise<{ data: T; headers: Headers }> => {
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`WordPress API request failed (${response.status} ${response.statusText})`);
  }

  const data = (await response.json()) as T;
  return { data, headers: response.headers };
};

export const fetchAllWordPressPosts = async (config: WordPressReadConfig): Promise<WordPressPost[]> => {
  const perPage = 100;
  let page = 1;
  let totalPages = 1;
  const allPosts: WordPressPost[] = [];

  do {
    const url = buildWordPressApiUrl(config, {
      _embed: true,
      per_page: perPage,
      page,
      status: "publish",
    });

    const { data, headers } = await requestWordPressJson<WordPressPost[]>(url);
    allPosts.push(...data);

    totalPages = Number(headers.get("x-wp-totalpages") || "1");
    page += 1;
  } while (page <= totalPages);

  return allPosts;
};

export const fetchWordPressPostBySlug = async (
  config: WordPressReadConfig,
  slug: string,
): Promise<WordPressPost | null> => {
  const url = buildWordPressApiUrl(config, {
    _embed: true,
    per_page: 1,
    slug,
    status: "publish",
  });

  const { data } = await requestWordPressJson<WordPressPost[]>(url);
  return data[0] || null;
};

export const fetchWordPressPageBySlug = async (
  config: WordPressReadConfig,
  slug: string,
): Promise<WordPressPage | null> => {
  const url = buildWordPressApiUrl(config, { _embed: true, per_page: 1, slug, status: "publish" }, config.pagesEndpoint);
  const { data } = await requestWordPressJson<WordPressPage[]>(url);
  return data[0] || null;
};
