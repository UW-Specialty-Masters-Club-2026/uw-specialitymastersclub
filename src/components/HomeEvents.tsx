import { Link } from "react-router-dom";
import { useWordPressEventsQuery } from "@/lib/wordpress/hooks";
import { getEventCta } from "@/lib/wordpress/eventCta";
import type { SMCEvent } from "@/lib/wordpress/types";

const timeZone = "America/Los_Angeles";
const dayFormat = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short", month: "short", day: "numeric" });
const timeFormatter = new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit" });
// ICU may separate the clock and AM/PM with a narrow no-break space.
const formatTime = (date: Date) => timeFormatter.format(date).replace(/\s/g, " ");

/** "Sun, Nov 8 · 5:30–7:00 PM PT", matching the reference event facts. */
const formatWhen = (startAt: string, endAt?: string) => {
  const start = new Date(startAt);
  const day = dayFormat.format(start);
  const startTime = formatTime(start);
  if (!endAt || dayFormat.format(new Date(endAt)) !== day) return `${day} · ${startTime} PT`;
  const endTime = formatTime(new Date(endAt));
  const [startClock, startPeriod] = startTime.split(" ");
  return endTime.endsWith(startPeriod)
    ? `${day} · ${startClock}–${endTime} PT`
    : `${day} · ${startTime}–${endTime} PT`;
};

const iconProps = {
  width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
  className: "shrink-0",
};

const EventFacts = ({ event }: { event: SMCEvent }) => (
  <ul className="flex flex-col gap-1.5 mt-3 mb-5 text-sm font-semibold">
    {event.startAt && (
      <li className="flex items-center gap-2">
        <svg {...iconProps}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
        <span className="sr-only">When: </span>
        <span>{formatWhen(event.startAt, event.endAt)}</span>
      </li>
    )}
    {event.location && (
      <li className="flex items-center gap-2">
        <svg {...iconProps}><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
        <span className="sr-only">Where: </span>
        <span>{event.location}</span>
      </li>
    )}
  </ul>
);

const HomeEvents = () => {
  const { data: events, isLoading } = useWordPressEventsQuery();
  const now = Date.now();
  const upcoming = (events || [])
    .filter((e) => e.startAt && Date.parse(e.endAt || e.startAt) >= now)
    .sort((a, b) => Date.parse(a.startAt!) - Date.parse(b.startAt!))
    .slice(0, 3);

  return (
    <section className="bg-white" aria-labelledby="events">
      <div className="home-container py-12">
        <h2 id="events" className="section-title">Events</h2>
        <p className="my-4 text-smc-body leading-relaxed">
          Check out our previous and upcoming fireside chats, workshops, and networking events.
        </p>

        {isLoading ? (
          <p className="my-4 text-smc-body leading-relaxed">Loading events…</p>
        ) : upcoming.length === 0 ? (
          <p className="my-4 text-smc-body leading-relaxed">
            No upcoming events yet. <Link to="/events" className="text-smc-accent underline">See past events</Link>
          </p>
        ) : (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-4 mb-4">
            {upcoming.map((event) => {
              const href = getEventCta(event)?.url || event.rsvpUrl || event.postUrl;
              return (
                <li key={event.id} className="bg-white px-6 py-7">
                  <h3 className="text-lg font-bold leading-[1.3] mb-2">
                    {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="underline">{event.title}</a> : event.title}
                  </h3>
                  {event.summary && <p className="my-4 text-smc-body leading-relaxed">{event.summary}</p>}
                  <EventFacts event={event} />
                </li>
              );
            })}
          </ul>
        )}

        <p className="my-4">
          <Link to="/events" className="btn-ref btn-ref-outline">View All Events</Link>
        </p>
      </div>
    </section>
  );
};

export default HomeEvents;
