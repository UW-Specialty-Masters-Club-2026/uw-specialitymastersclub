import assert from "node:assert/strict";
import { filterWordPressArticlePosts } from "./mappers";
import type { WordPressPost } from "./types";

const post = (slug: string, category: string): WordPressPost => ({
  id: 1,
  slug,
  date: "2026-01-01T00:00:00",
  title: { rendered: slug },
  excerpt: { rendered: "" },
  content: { rendered: "" },
  _embedded: { "wp:term": [[{ taxonomy: "category", name: category }]] },
});

assert.deepEqual(filterWordPressArticlePosts([post("article", "AI"), post("team-member", "smc-team"), post("newsletter", "smc-newsletter")]).map((item) => item.slug), ["article"]);
console.log("wordpress article filtering tests passed");
