import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      title: "Foster AI Hackathon",
      date: "January 30, 2025",
      description: "Join us for an intensive AI hackathon showcasing innovative solutions and collaborative problem-solving.",
      location: "PACCAR Hall, UW Foster",
      color: "primary"
    },
    {
      title: "Google Case Challenge Prep",
      date: "February 2025",
      description: "Prepare for Google's analytics case competition with expert guidance and hands-on practice.",
      location: "Foster School",
      color: "gold"
    },
    {
      title: "SMC Networking Mixer",
      date: "March 2025",
      description: "Connect with fellow specialty master's students across programs in a relaxed social setting.",
      location: "TBA",
      color: "primary"
    }
  ];

  return (
    <section id="events" className="section-container bg-lavender">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Upcoming Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Card 
            key={index}
            className="card-hover bg-card border-2 border-primary/10 slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">{event.date}</span>
              </div>
              <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">{event.description}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{event.location}</span>
              </div>
              <Button variant="default" className="w-full">
                RSVP
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Events;