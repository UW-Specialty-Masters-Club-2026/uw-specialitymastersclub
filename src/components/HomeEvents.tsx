import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useWordPressEventsQuery } from "@/lib/wordpress/hooks";
import { getEventCta } from "@/lib/wordpress/eventCta";

const formatDate = (value: string) => new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles", weekday: "short", month: "short", day: "numeric",
  hour: "numeric", minute: "2-digit", timeZoneName: "short",
}).format(new Date(value));

const HomeEvents = () => {
  const { data: events = [] } = useWordPressEventsQuery();
  const now = Date.now();
  const upcoming = events
    .filter((e) => e.startAt && Date.parse(e.endAt || e.startAt) >= now)
    .sort((a, b) => Date.parse(a.startAt!) - Date.parse(b.startAt!));
  const recent = events
    .filter((e) => e.startAt && Date.parse(e.endAt || e.startAt) < now)
    .sort((a, b) => Date.parse(b.startAt!) - Date.parse(a.startAt!));
  const shown = (upcoming.length ? upcoming : recent).slice(0, 3);

  return (
    <section className="bg-background py-20">
      <div className="home-container">
        <h2 className="display text-5xl text-brand-vivid mb-5">Events</h2>
        <p className="text-brand-ink mb-10">
          Check out our previous and upcoming fireside chats, workshops, and networking events.
        </p>

        {shown.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {shown.map((event) => {
              const href = getEventCta(event)?.url || event.rsvpUrl || event.postUrl;
              return (
                <div key={event.id} className="px-6">
                  <h3 className="text-lg font-bold text-brand-ink underline underline-offset-2 mb-5">
                    {href ? <a href={href} target="_blank" rel="noopener noreferrer">{event.title}</a> : event.title}
                  </h3>
                  {event.summary && <p className="text-brand-ink leading-relaxed mb-5 line-clamp-4">{event.summary}</p>}
                  <ul className="space-y-2 text-sm font-semibold text-brand-ink">
                    {event.startAt && (
                      <li className="flex gap-2"><CalendarDays className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />{formatDate(event.startAt)}</li>
                    )}
                    {event.location && (
                      <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />{event.location}</li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        <Link
          to="/events"
          className="inline-block px-[28px] py-3 text-sm font-bold uppercase tracking-[0.12em] border-2 border-brand-ink text-brand-ink hover:bg-wash transition-colors"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
};

export default HomeEvents;
