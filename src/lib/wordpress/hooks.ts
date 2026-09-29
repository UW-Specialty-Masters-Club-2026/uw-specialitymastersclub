import { useQuery } from "@tanstack/react-query";
import { fetchAllWordPressPosts, fetchWordPressPostBySlug } from "./client";
import { getWordPressReadConfig } from "./config";
import { mapWordPressPostToArticle } from "./mappers";

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
      return posts.map(mapWordPressPostToArticle);
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
