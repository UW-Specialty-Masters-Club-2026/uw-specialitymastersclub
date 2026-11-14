import type { SMCEvent } from "./types";

export type EventCta = { label: string; url: string };

// Events whose card should link somewhere other than the WordPress post
// (keyed by the WordPress post id). Add an entry here when a card needs a
// button that differs from its own post page; empty means every card uses
// its normal link.
const EVENT_CTAS: Record<number, EventCta> = {};

export const getEventCta = (event: SMCEvent): EventCta | null =>
  EVENT_CTAS[event.id] ?? null;
