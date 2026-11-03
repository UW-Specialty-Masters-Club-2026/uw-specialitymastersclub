import assert from "node:assert/strict";
import { getEventCta } from "./eventCta";
import type { SMCEvent } from "./types";

const event = (id: number): SMCEvent => ({
  id,
  title: `Event ${id}`,
  image: "",
  summary: "",
  location: "",
  rsvpUrl: "",
  postUrl: `https://sites.uw.edu/smcommittee/${id}/`,
});

// The Claude Workshop card has no override: it shows its normal "Read more"
// link to the WordPress post, not a Register button.
assert.equal(getEventCta(event(219)), null);

// Every other event keeps its normal "Read more" link too.
assert.equal(getEventCta(event(220)), null);

console.log("wordpress event cta tests passed");
