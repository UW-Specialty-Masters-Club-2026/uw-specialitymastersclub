import { Shield, Car, Store, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: "AI Safety Workshop",
      location: "Seattle Public Library",
      description: "Community education on AI use & safety."
    },
    {
      icon: Car,
      title: "Waymo Safety Impact Data Project",
      description: "Predictive modeling using real-world autonomous vehicle datasets."
    },
    {
      icon: Store,
      title: "SMB Tech Adoption for FIFA 2026",
      description: "Supporting local businesses with AI & automation readiness."
    },
    {
      icon: Brain,
      title: "Agentic AI Lab",
      description: "Hands-on experiments with multi-agent systems & autonomous decision-making."
    }
  ];

  return (
    <section className="section-container bg-background">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          AI Projects Showcase
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our hands-on AI initiatives that bridge academic learning with real-world impact
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="card-hover border-2 border-lavender bg-card slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              {project.location && (
                <p className="text-sm text-gold font-medium">{project.location}</p>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;