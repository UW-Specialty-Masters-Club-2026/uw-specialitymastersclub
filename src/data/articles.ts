export type ContentBlock =
  | { type: "paragraph" | "heading" | "highlight"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt?: string };

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  heroImage: string;
  content: ContentBlock[];
  colabLink?: string;
}
