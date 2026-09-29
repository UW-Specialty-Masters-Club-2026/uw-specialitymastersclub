import type { Article, ContentBlock } from "@/data/articles";

export type WordPressRenderedField = {
  rendered: string;
};

export type WordPressAuthor = {
  name?: string;
  avatar_urls?: Record<string, string>;
};

export type WordPressMedia = {
  source_url?: string;
};

export type WordPressTerm = {
  taxonomy?: string;
  name?: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  title: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  content: WordPressRenderedField;
  _embedded?: {
    author?: WordPressAuthor[];
    "wp:featuredmedia"?: WordPressMedia[];
    "wp:term"?: WordPressTerm[][];
  };
};

export type WordPressReadConfig = {
  baseUrl: string;
  postsEndpoint: string;
};

export type ParsedSmcMeta = {
  author?: string;
  authorAvatar?: string;
  colabLink?: string;
};

export type ParsedWordPressContent = {
  contentBlocks: ContentBlock[];
  meta: ParsedSmcMeta;
};

export type { Article, ContentBlock };
