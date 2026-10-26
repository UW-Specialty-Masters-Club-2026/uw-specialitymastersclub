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

// The Claude Workshop card must send people to the public Luma event page.
assert.deepEqual(getEventCta(event(219)), {
  label: "Register",
  url: "https://luma.com/event/evt-QA5jHGLqkyzr4m4",
});

// Every other event keeps its normal "Read more" link.
assert.equal(getEventCta(event(220)), null);

console.log("wordpress event cta tests passed");
