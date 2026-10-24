import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWordPressEventsQuery } from "@/lib/wordpress/hooks";
import type { SMCEvent } from "@/lib/wordpress/types";

const formatDate = (value: string) => new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles", month: "short", day: "numeric", year: "numeric",
  hour: "numeric", minute: "2-digit", timeZoneName: "short",
}).format(new Date(value));

const EventCard = ({ event }: { event: SMCEvent }) => (
  <Card className="overflow-hidden border-0 shadow-lg card-hover">
    {event.image && <img src={event.image} alt={`${event.title} poster`} loading="lazy" className="w-full h-72 object-contain bg-muted" />}
    <CardContent className="p-6 space-y-4">
      <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
      <p className="flex items-start gap-2 text-sm text-muted-foreground">
        <CalendarDays className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{event.startAt ? <><time dateTime={event.startAt}>{formatDate(event.startAt)}</time>{event.endAt && <> – <time dateTime={event.endAt}>{formatDate(event.endAt)}</time></>}</> : "Date to be announced"}</span>
      </p>
      {event.location && <p className="flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />{event.location}</p>}
      {event.summary && <p className="text-foreground/80 whitespace-pre-line line-clamp-4">{event.summary}</p>}
      <div className="flex flex-wrap gap-3">
        {event.postUrl && <Button asChild variant="outline"><a href={event.postUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read more about ${event.title} (opens in a new tab)`}>Read more</a></Button>}
        {event.rsvpUrl && <Button asChild variant="gold"><a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer" aria-label={`RSVP for ${event.title} (opens in a new tab)`}>RSVP</a></Button>}
      </div>
    </CardContent>
  </Card>
);

const Events = () => {
  const { data: events = [], isLoading, isError, refetch } = useWordPressEventsQuery();
  const now = Date.now();
  const upcoming = events.filter((event) => event.startAt && Date.parse(event.endAt || event.startAt) >= now)
    .sort((a, b) => Date.parse(a.startAt!) - Date.parse(b.startAt!));
  const past = events.filter((event) => event.startAt && Date.parse(event.endAt || event.startAt) < now)
    .sort((a, b) => Date.parse(b.startAt!) - Date.parse(a.startAt!));
  const undated = events.filter((event) => !event.startAt);

  return (
    <section id="events" className="section-container bg-lavender">
      <div className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Events</h1><div className="w-24 h-1 bg-gold mx-auto" /></div>
      {isLoading && <p role="status" className="text-center py-12 text-muted-foreground">Loading events from WordPress...</p>}
      {isError && <div role="alert" className="text-center py-12 space-y-4"><p>Unable to load events from WordPress.</p><Button onClick={() => refetch()}>Try again</Button></div>}
      {!isLoading && !isError && !events.length && <p className="text-center py-12 text-muted-foreground">No events published yet. Check back soon.</p>}
      {!isLoading && !isError && [{ title: "Upcoming Events", items: upcoming }, { title: "More Events", items: undated }, { title: "Past Events", items: past }].filter((group) => group.items.length).map((group) => (
        <div key={group.title} className="mb-12"><h2 className="text-2xl font-bold text-primary mb-6">{group.title}</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{group.items.map((event) => <EventCard key={event.id} event={event} />)}</div></div>
      ))}
    </section>
  );
};

export default Events;
