import assert from "node:assert/strict";
import { filterWordPressArticlePosts, toDirectUploadUrl } from "./mappers";
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
// Newsletter PDFs must skip the sites.uw.edu redirect, which Safari blocks for pdf.js.
assert.equal(
  toDirectUploadUrl("https://sites.uw.edu/smcommittee/files/2026/09/Specialty_Masters_Club_Newsletter_VOL_3.pdf"),
  "https://bpb-us-e1.wpmucdn.com/sites.uw.edu/dist/a/41759/files/2026/09/Specialty_Masters_Club_Newsletter_VOL_3.pdf",
);
assert.equal(toDirectUploadUrl("https://example.com/file.pdf"), "https://example.com/file.pdf");
console.log("wordpress article filtering tests passed");
