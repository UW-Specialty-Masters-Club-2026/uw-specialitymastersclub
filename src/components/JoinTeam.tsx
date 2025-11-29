import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

const JoinTeam = () => {
  const positions = [
    {
      icon: Users,
      title: "Event Coordinators",
      description: "Help organize and execute SMC events, mixers, and workshops"
    },
    {
      icon: Target,
      title: "Project Leads",
      description: "Lead AI projects and technical initiatives for the community"
    },
    {
      icon: Lightbulb,
      title: "Marketing & Design",
      description: "Create content and promote SMC activities across platforms"
    }
  ];

  return (
    <section id="join-team" className="section-container bg-card">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Join Our Team
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          Become a part of the SMC leadership team and help shape the future of specialty master's programs at Foster
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {positions.map((position, index) => (
          <Card 
            key={index} 
            className="card-hover border-2 border-lavender bg-background slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <position.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">{position.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{position.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center slide-up">
        <Button size="lg" variant="gold" className="text-lg px-8">
          Apply to Join the Team
        </Button>
      </div>
    </section>
  );
};

export default JoinTeam;
