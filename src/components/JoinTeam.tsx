import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const JoinTeam = () => {
  const positions = [
    {
      icon: Target,
      title: "Strategy",
      description: "Shape SMC's vision and drive strategic initiatives across programs"
    },
    {
      icon: Users,
      title: "Operations",
      description: "Coordinate events, manage logistics, and ensure smooth execution"
    },
    {
      icon: GraduationCap,
      title: "Alumni",
      description: "Build connections with alumni and create networking opportunities"
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

      <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
        <Button size="lg" variant="gold" className="text-lg px-8">
          Apply to Join the Team
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8" asChild>
          <Link to="/team">Meet the Team</Link>
        </Button>
      </div>
    </section>
  );
};

export default JoinTeam;
