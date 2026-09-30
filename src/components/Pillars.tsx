import { Users, Trophy, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const Pillars = () => {
  const { data } = useWordPressHomepageQuery();
  const iconMap = [Users, Trophy, Cpu];
  const pillars = data?.pillars || [];
  /* const pillars = [
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
  ]; */

  return (
    <section className="section-container bg-background">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our 3-Pillar Strategy
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => {
          const Icon = iconMap[index] || Users;
          return (
          <Card 
            key={index} 
            className="card-hover border-2 border-lavender bg-card slide-up transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-primary" />
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
          );
        })}
      </div>
    </section>
  );
};

export default Pillars;
