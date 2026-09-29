import type { Article, WordPressPost } from "./types";
import { parseWordPressHtmlContent } from "./contentBlocks";

const stripHtml = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
};

const decodeHtml = (value: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(value, "text/html");
  return doc.body.textContent || value;
};

const formatArticleDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const getCategoryName = (post: WordPressPost) => {
  const termGroups = post._embedded?.["wp:term"] || [];
  for (const group of termGroups) {
    const firstCategory = group.find((term) => term.taxonomy === "category" && term.name);
    if (firstCategory?.name) {
      return firstCategory.name;
    }
  }

  return "Uncategorized";
};

const getAuthorAvatar = (post: WordPressPost, fallbackAvatar?: string) => {
  const author = post._embedded?.author?.[0];
  if (!author?.avatar_urls) {
    return fallbackAvatar || "https://api.dicebear.com/7.x/initials/svg?seed=SMC";
  }

  return author.avatar_urls["96"] || author.avatar_urls["48"] || Object.values(author.avatar_urls)[0] || fallbackAvatar || "https://api.dicebear.com/7.x/initials/svg?seed=SMC";
};

export const mapWordPressPostToArticle = (post: WordPressPost): Article => {
  const parsed = parseWordPressHtmlContent(post.content.rendered || "");

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    id: post.slug,
    title: decodeHtml(post.title.rendered || post.slug),
    subtitle: stripHtml(post.excerpt.rendered || "") || "",
    author: post._embedded?.author?.[0]?.name || parsed.meta.author || "SMC Contributor",
    authorAvatar: getAuthorAvatar(post, parsed.meta.authorAvatar),
    date: formatArticleDate(post.date),
    category: getCategoryName(post),
    heroImage: featuredImage || "",
    content: parsed.contentBlocks,
    colabLink: parsed.meta.colabLink,
  };
};
