import type { Article, GalleryItem, HomepageContent, Newsletter, Partner, TeamMember, WordPressPage, WordPressPost } from "./types";
import { parseDataMarker, parseWordPressHtmlContent } from "./contentBlocks";

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

const getFeaturedMedia = (record: WordPressPost | WordPressPage) =>
  record._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

const getPostCategoryNames = (post: WordPressPost) =>
  (post._embedded?.["wp:term"] || []).flat().filter((term) => term.taxonomy === "category").map((term) => term.name || "");

export const mapWordPressPageToHomepage = (page: WordPressPage): HomepageContent | null =>
  parseDataMarker<HomepageContent>(page.content.rendered || "", "homepage");

export const mapWordPressPostToTeamMember = (post: WordPressPost): TeamMember | null => {
  const marker = parseDataMarker<Omit<TeamMember, "name" | "image"> & { image?: string }>(post.content.rendered || "", "team");
  if (!marker) return null;
  return {
    name: decodeHtml(post.title.rendered || post.slug),
    role: marker.role || stripHtml(post.excerpt.rendered || ""),
    departments: marker.departments || [],
    major: marker.major || "",
    image: getFeaturedMedia(post) || marker.image || null,
    linkedin: marker.linkedin || null,
    isPlaceholder: Boolean(marker.isPlaceholder),
    isHead: Boolean(marker.isHead),
  };
};

export const mapWordPressPostToNewsletter = (post: WordPressPost): Newsletter | null => {
  const marker = parseDataMarker<Partial<Newsletter>>(post.content.rendered || "", "newsletter");
  if (!marker) return null;
  return {
    id: post.id,
    slug: post.slug,
    title: decodeHtml(post.title.rendered || post.slug),
    volume: marker.volume || "",
    date: formatArticleDate(post.date),
    description: stripHtml(post.excerpt.rendered || ""),
    pdfUrl: marker.pdfUrl || "",
    highlights: marker.highlights || [],
  };
};

export const mapWordPressPostToGalleryItem = (post: WordPressPost): GalleryItem | null => {
  const marker = parseDataMarker<{ alt?: string }>(post.content.rendered || "", "gallery");
  const url = getFeaturedMedia(post);
  if (!marker || !url) return null;
  return { id: post.slug, caption: decodeHtml(post.title.rendered || post.slug), url, alt: marker.alt || decodeHtml(post.title.rendered || post.slug) };
};

export const mapWordPressPageToPartners = (page: WordPressPage): Partner[] =>
  parseDataMarker<Partner[]>(page.content.rendered || "", "partners") || [];

export const filterWordPressPostsByCategory = (posts: WordPressPost[], category: string) =>
  posts.filter((post) => getPostCategoryNames(post).includes(category));

const NON_ARTICLE_CATEGORIES = new Set(["smc-team", "smc-newsletter", "smc-gallery"]);

export const filterWordPressArticlePosts = (posts: WordPressPost[]) =>
  posts.filter((post) => !getPostCategoryNames(post).some((category) => NON_ARTICLE_CATEGORIES.has(category)));
