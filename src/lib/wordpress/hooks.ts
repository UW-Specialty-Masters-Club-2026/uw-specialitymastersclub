import { useQuery } from "@tanstack/react-query";
import { fetchAllWordPressPosts, fetchWordPressPageBySlug, fetchWordPressPostBySlug } from "./client";
import { getWordPressReadConfig } from "./config";
import { filterWordPressArticlePosts, filterWordPressPostsByCategory, mapWordPressPageToHomepage, mapWordPressPageToPartners, mapWordPressPostToArticle, mapWordPressPostToGalleryItem, mapWordPressPostToNewsletter, mapWordPressPostToTeamMember } from "./mappers";

const missingConfigError =
  "WordPress API is not configured. Set VITE_WP_API_BASE_URL (and optional VITE_WP_POSTS_ENDPOINT).";

export const useWordPressArticlesQuery = () =>
  useQuery({
    queryKey: ["wordpress", "articles"],
    queryFn: async () => {
      const config = getWordPressReadConfig();
      if (!config) {
        throw new Error(missingConfigError);
      }

      const posts = await fetchAllWordPressPosts(config);
      return filterWordPressArticlePosts(posts).map(mapWordPressPostToArticle);
    },
  });

export const useWordPressArticleBySlugQuery = (slug?: string) =>
  useQuery({
    queryKey: ["wordpress", "article", slug],
    enabled: Boolean(slug),
    queryFn: async () => {
      const config = getWordPressReadConfig();
      if (!config) {
        throw new Error(missingConfigError);
      }

      const post = await fetchWordPressPostBySlug(config, slug || "");
      return post ? mapWordPressPostToArticle(post) : null;
    },
  });

const useWordPressCategoryQuery = <T>(category: string, mapper: (post: import("./types").WordPressPost) => T | null) =>
  useQuery({
    queryKey: ["wordpress", "category", category],
    queryFn: async () => {
      const config = getWordPressReadConfig();
      if (!config) throw new Error(missingConfigError);
      const posts = filterWordPressPostsByCategory(await fetchAllWordPressPosts(config), category);
      return posts.map(mapper).filter((value): value is T => value !== null);
    },
  });

export const useWordPressHomepageQuery = () => useQuery({
  queryKey: ["wordpress", "page", "smc-homepage"],
  queryFn: async () => {
    const config = getWordPressReadConfig();
    if (!config) throw new Error(missingConfigError);
    const page = await fetchWordPressPageBySlug(config, "smc-homepage");
    return page ? mapWordPressPageToHomepage(page) : null;
  },
});

export const useWordPressTeamQuery = () => useWordPressCategoryQuery("smc-team", mapWordPressPostToTeamMember);
export const useWordPressNewslettersQuery = () => useWordPressCategoryQuery("smc-newsletter", mapWordPressPostToNewsletter);
export const useWordPressGalleryQuery = () => useWordPressCategoryQuery("smc-gallery", mapWordPressPostToGalleryItem);

export const useWordPressNewsletterBySlugQuery = (slug?: string) => useQuery({
  queryKey: ["wordpress", "newsletter", slug],
  enabled: Boolean(slug),
  queryFn: async () => {
    const config = getWordPressReadConfig();
    if (!config) throw new Error(missingConfigError);
    const post = await fetchWordPressPostBySlug(config, slug || "");
    return post ? mapWordPressPostToNewsletter(post) : null;
  },
});

export const useWordPressPartnersQuery = () => useQuery({
  queryKey: ["wordpress", "page", "smc-partners"],
  queryFn: async () => {
    const config = getWordPressReadConfig();
    if (!config) throw new Error(missingConfigError);
    const page = await fetchWordPressPageBySlug(config, "smc-partners");
    return page ? mapWordPressPageToPartners(page) : [];
  },
});
