import type { SMCEvent } from "./types";

export type EventCta = { label: string; url: string };

// Events whose card should link somewhere other than the WordPress post
// (keyed by the WordPress post id). The Claude Workshop registration lives
// on Luma, so its card points there instead of showing "Read more".
const EVENT_CTAS: Record<number, EventCta> = {
  219: { label: "Register", url: "https://luma.com/event/evt-QA5jHGLqkyzr4m4" },
};

export const getEventCta = (event: SMCEvent): EventCta | null =>
  EVENT_CTAS[event.id] ?? null;
