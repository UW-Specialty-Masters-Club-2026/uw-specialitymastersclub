import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Product Management Fireside Chat",
    date: "Feb 19 (Thu), 4:30–5:45 PM",
    description: "Industry panel of Senior PMs and PM Directors, moderated by Jenne Peirce.",
    link: "https://smcfoster.notion.site/pm-fireside",
  },
  {
    title: "Data Analytics & Data Science Fireside Chat",
    date: "Tentatively Feb 25",
    description: "Industry panel of Senior Data Analysts. More details and link coming shortly.",
    link: "https://smcfoster.notion.site/ds-fireside",
  },
  {
    title: "Experimentation Workshop",
    date: "Mar 2",
    description: "A Senior Principal Manager from Amazon will talk about building modern experimentation platforms at scale and the complexities involved. More details to follow.",
    link: null,
  },
];

const Events = () => {
  return (
    <section id="events" className="section-container bg-lavender">
      <div className="text-center slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Upcoming Q1 Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        
        <div className="max-w-3xl mx-auto grid gap-6">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-lavender transition-all duration-300 hover:shadow-xl hover:scale-[1.01] text-left slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">{event.title}</h3>
                  <p className="text-sm font-semibold text-gold mb-2">{event.date}</p>
                  <p className="text-foreground/80 text-sm mb-3">{event.description}</p>
                  {event.link ? (
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Details <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground italic">Details coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;