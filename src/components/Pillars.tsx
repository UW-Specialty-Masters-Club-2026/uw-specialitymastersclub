import { Users, Trophy, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pillars = () => {
  const pillars = [
    {
      icon: Users,
      title: "Community & Connection",
      items: [
        "Cross-program mixers & meetups",
        "Social & cultural events",
        "Peer collaboration across Foster programs",
        "Strengthening belonging at Foster"
      ]
    },
    {
      icon: Trophy,
      title: "Career & Competitions",
      comingSoon: true,
      items: [
        "Networking & Industry Engagement",
        "Career & Application Readiness",
        "Case Competitions",
        "AI Projects & Innovation Lab"
      ]
    },
    {
      icon: Cpu,
      title: "Tech & AI Projects",
      items: [
        "Agentic AI experimentation & hands-on labs",
        "AI Safety Awareness collaborations",
        "Real-world Foster AI applications and ROI modeling"
      ]
    }
  ];

  return (
    <section className="section-container bg-background">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our 3-Pillar Strategy
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Card 
            key={index} 
            className="card-hover border-2 border-lavender bg-card slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                {pillar.comingSoon && (
                  <Badge className="bg-gold text-gold-foreground">Coming Soon</Badge>
                )}
              </div>
              <CardTitle className="text-2xl text-primary">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pillar.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-foreground">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pillars;