import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Sarah Chen",
      program: "MSBA",
      role: "President",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Rodriguez",
      program: "MSIS",
      role: "VP of Events",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      name: "Priya Patel",
      program: "MSGF",
      role: "VP of Projects",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
      name: "James Kim",
      program: "MSA",
      role: "VP of Communications",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      name: "Emma Thompson",
      program: "MSBA",
      role: "VP of Partnerships",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    {
      name: "David Lee",
      program: "MSIS",
      role: "Treasurer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
  ];

  return (
    <section className="section-container bg-lavender">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Meet the Leadership Team
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <Card 
            key={index}
            className="card-hover bg-card border-2 border-primary/10 slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="pt-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-lavender">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
              <p className="text-gold font-semibold mb-1">{leader.program}</p>
              <p className="text-muted-foreground mb-4">{leader.role}</p>
              <button 
                className="inline-flex items-center gap-2 text-primary hover:text-gold transition-colors"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">Connect</span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Leadership;