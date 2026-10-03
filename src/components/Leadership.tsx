import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Camera } from "lucide-react";
import { useWordPressTeamQuery } from "@/lib/wordpress/hooks";

const Leadership = () => {
  const { data: members = [] } = useWordPressTeamQuery();
  const leaders = members.filter((member) => member.isHead).slice(0, 6);

  return (
    <section className="section-container bg-lavender">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Meet the Leadership Team
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <Card key={leader.name} className="card-hover bg-card border-2 border-primary/10 slide-up">
            <CardContent className="pt-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-lavender">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-12 h-12 m-10 text-muted-foreground/50" />
                )}
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
              <p className="text-gold font-semibold mb-1">{leader.major}</p>
              <p className="text-muted-foreground mb-4">{leader.role}</p>

              {/* Action Links (LinkedIn & Website) */}
              <div className="flex items-center justify-center gap-4">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">Connect</span>
                  </a>
                )}
                {leader.website && (
                  <a
                    href={leader.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="text-sm font-medium">Website</span>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
