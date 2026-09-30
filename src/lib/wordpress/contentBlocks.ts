import type { ContentBlock, ParsedSmcMeta, ParsedWordPressContent } from "./types";

export const HIGHLIGHT_CLASS = "smc-highlight";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeText = (value?: string) => value?.trim() || "";

export const serializeDataMarker = (name: string, value: unknown) =>
  `<div data-smc-marker="${escapeHtml(name)}" data-smc-json="${escapeHtml(JSON.stringify(value))}"></div>`;

export const parseDataMarker = <T>(html: string, name: string): T | null => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const marker = doc.querySelector<HTMLElement>(`[data-smc-marker="${name}"]`);
  const value = marker?.getAttribute("data-smc-json");
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
};

const serializeMeta = (meta: ParsedSmcMeta) => {
  const attrs: string[] = ['data-smc-meta="true"'];

  if (meta.author) {
    attrs.push(`data-smc-author="${escapeHtml(meta.author)}"`);
  }
  if (meta.authorAvatar) {
    attrs.push(`data-smc-author-avatar="${escapeHtml(meta.authorAvatar)}"`);
  }
  if (meta.colabLink) {
    attrs.push(`data-smc-colab-link="${escapeHtml(meta.colabLink)}"`);
  }

  return `<div ${attrs.join(" ")}></div>`;
};

export const contentBlocksToWordPressHtml = (
  blocks: ContentBlock[],
  options: {
    meta?: ParsedSmcMeta;
    resolveImageSrc?: (src: string) => string;
  } = {},
): string => {
  const htmlBlocks: string[] = [];

  if (options.meta) {
    htmlBlocks.push(serializeMeta(options.meta));
  }

  for (const block of blocks) {
    if (block.type === "paragraph") {
      const text = normalizeText(block.text);
      if (text) {
        htmlBlocks.push(`<p>${escapeHtml(text)}</p>`);
      }
      continue;
    }

    if (block.type === "heading") {
      const text = normalizeText(block.text);
      if (text) {
        htmlBlocks.push(`<h2>${escapeHtml(text)}</h2>`);
      }
      continue;
    }

    if (block.type === "list" && block.items?.length) {
      const items = block.items
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
      htmlBlocks.push(`<ul>${items}</ul>`);
      continue;
    }

    if (block.type === "highlight") {
      const text = normalizeText(block.text);
      if (text) {
        htmlBlocks.push(
          `<blockquote class="${HIGHLIGHT_CLASS}" data-smc-highlight="true"><p>${escapeHtml(text)}</p></blockquote>`,
        );
      }
      continue;
    }

    if (block.type === "image" && block.src) {
      const imageSrc = options.resolveImageSrc?.(block.src) || block.src;
      if (imageSrc) {
        htmlBlocks.push(
          `<figure><img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(block.alt || "Article image")}" /></figure>`,
        );
      }
    }
  }

  if (options.meta?.colabLink) {
    htmlBlocks.push(
      `<p><a href="${escapeHtml(options.meta.colabLink)}" data-smc-colab-link="true">View Colab Notebook</a></p>`,
    );
  }

  return htmlBlocks.join("\n");
};

const createTextBlock = (type: "paragraph" | "heading" | "highlight", text: string): ContentBlock | null => {
  const normalized = normalizeText(text);
  return normalized ? { type, text: normalized } : null;
};

export const parseWordPressHtmlContent = (html: string): ParsedWordPressContent => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const wrapper = doc.body.firstElementChild as HTMLElement | null;

  if (!wrapper) {
    return { contentBlocks: [], meta: {} };
  }

  const metaElement = wrapper.querySelector<HTMLElement>("[data-smc-meta='true']");
  const colabLinkElement = wrapper.querySelector<HTMLAnchorElement>("a[data-smc-colab-link='true']");

  const meta: ParsedSmcMeta = {
    author: metaElement?.dataset.smcAuthor,
    authorAvatar: metaElement?.dataset.smcAuthorAvatar,
    colabLink: metaElement?.dataset.smcColabLink || colabLinkElement?.href,
  };

  const blocks: ContentBlock[] = [];

  for (const node of Array.from(wrapper.children)) {
    if (node.matches("[data-smc-meta='true']") || node.querySelector("a[data-smc-colab-link='true']")) {
      continue;
    }

    if (/^H[1-6]$/.test(node.tagName)) {
      const block = createTextBlock("heading", node.textContent || "");
      if (block) blocks.push(block);
      continue;
    }

    if (node.tagName === "P") {
      const block = createTextBlock("paragraph", node.textContent || "");
      if (block) blocks.push(block);
      continue;
    }

    if (node.tagName === "UL" || node.tagName === "OL") {
      const items = Array.from(node.querySelectorAll("li"))
        .map((item) => normalizeText(item.textContent || ""))
        .filter(Boolean);

      if (items.length) {
        blocks.push({ type: "list", items });
      }
      continue;
    }

    if (node.tagName === "BLOCKQUOTE" && (node.classList.contains(HIGHLIGHT_CLASS) || node.hasAttribute("data-smc-highlight"))) {
      const block = createTextBlock("highlight", node.textContent || "");
      if (block) blocks.push(block);
      continue;
    }

    const image = node.tagName === "IMG" ? node : node.querySelector("img");
    if (image) {
      const src = image.getAttribute("src") || "";
      if (src) {
        blocks.push({
          type: "image",
          src,
          alt: image.getAttribute("alt") || "Article image",
        });
      }
      continue;
    }

    const block = createTextBlock("paragraph", node.textContent || "");
    if (block) {
      blocks.push(block);
    }
  }

  return {
    contentBlocks: blocks,
    meta,
  };
};
