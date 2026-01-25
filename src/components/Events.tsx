import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <section id="events" className="section-container bg-lavender">
      <div className="text-center slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Upcoming Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />
        
        <div className="max-w-2xl mx-auto space-y-8">
          {/* AI Automation Workshop */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-lavender transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-gold" />
              <span className="text-lg font-semibold text-primary">AI Automation Workshop</span>
            </div>
            <p className="text-foreground mb-4">
              Learn how to leverage AI tools to automate workflows and boost productivity. 
              Hands-on session with practical applications for business students.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a 
                href="https://smcfoster.notion.site/AI-Automation-Workshop-2f10984ab5b68095bd00c76d4ee3829a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Event Details <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* February Calendar Coming Soon */}
          <div className="bg-card/50 rounded-xl p-6 border border-dashed border-primary/30">
            <p className="text-lg text-primary font-medium mb-2">📅 February Calendar Coming Soon</p>
            <p className="text-foreground">
              We're planning exciting events for February including networking mixers, 
              workshops, and more. Stay tuned for announcements!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;