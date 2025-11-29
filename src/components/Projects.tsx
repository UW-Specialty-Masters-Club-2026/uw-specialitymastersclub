import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import aiSafetyImage from "@/assets/ai-safety-workshop.jpg";

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-card">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          AI Projects Showcase
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="max-w-2xl mx-auto">
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
    </section>
  );
};

export default Projects;
