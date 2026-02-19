import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import aiSafetyImage from "@/assets/ai-safety-workshop.jpg";
import eventClassroom from "@/assets/event-classroom.jpg";
import eventGroupSelfie from "@/assets/event-group-selfie.jpg";

const pastEventImages = [
  { src: eventClassroom, alt: "SMC classroom session" },
  { src: eventGroupSelfie, alt: "SMC group photo after event" },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-card">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          AI Projects Showcase & Past Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="max-w-2xl mx-auto mb-16">
        <Card 
          className="card-hover border-2 border-lavender bg-background slide-up overflow-hidden"
        >
          <div className="h-64 overflow-hidden">
            <img 
              src={aiSafetyImage} 
              alt="AI Safety Workshop at Seattle Public Library"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-primary text-2xl">AI Safety Workshop</CardTitle>
            <p className="text-muted-foreground">Seattle Public Library</p>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Community education on AI use & safety, bringing awareness and best practices to the public.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Past Event Photos */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {pastEventImages.map((img, index) => (
          <div 
            key={index} 
            className="rounded-2xl overflow-hidden shadow-lg slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={img.src} 
              alt={img.alt}
              className="w-full h-64 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
