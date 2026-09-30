import type { Article, ContentBlock } from "@/data/articles";

export type WordPressRenderedField = {
  rendered: string;
};

export type WordPressAuthor = {
  name?: string;
  avatar_urls?: Record<string, string>;
};

export type WordPressMedia = {
  id?: number;
  slug?: string;
  date?: string;
  caption?: WordPressRenderedField;
  description?: WordPressRenderedField;
  mime_type?: string;
  source_url?: string;
  alt_text?: string;
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
  featured_media?: number;
  categories?: number[];
  _embedded?: {
    author?: WordPressAuthor[];
    "wp:featuredmedia"?: WordPressMedia[];
    "wp:term"?: WordPressTerm[][];
  };
};

export type WordPressPage = WordPressPost;

export type WordPressReadConfig = {
  baseUrl: string;
  postsEndpoint: string;
  pagesEndpoint: string;
  mediaEndpoint: string;
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

export type HomepageContent = {
  logo?: string;
  hero: { title: string; subtitle: string; image: string; primaryCta?: string; secondaryCta?: string };
  about: { title: string; paragraphs: string[]; image: string };
  pillars: Array<{ title: string; items: string[]; icon?: string; badge?: string }>;
  projects: Array<{ title: string; location?: string; description: string; image?: string; icon?: string }>;
  contact: { email: string; linkedin?: string; instagram?: string };
  newsletter: { title: string; description: string };
};

export type TeamMember = {
  name: string;
  role: string;
  departments: string[];
  major: string;
  image: string | null;
  linkedin: string | null;
  isPlaceholder: boolean;
  isHead?: boolean;
};

export type Newsletter = {
  id: number;
  slug: string;
  title: string;
  volume: string;
  date: string;
  description: string;
  pdfUrl: string;
  highlights: string[];
};

export type GalleryItem = { id: string; caption: string; url: string; alt: string };
export type Partner = { name: string; logo: string; href?: string };

export type { Article, ContentBlock };
