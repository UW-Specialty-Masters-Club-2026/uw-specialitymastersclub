import { UserPlus, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Join = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Fill out our SMC membership form to get started"
    },
    {
      icon: MessageCircle,
      title: "Join WhatsApp",
      description: "Connect with the community in our group chat"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in meetings, workshops & networking events"
    }
  ];

  return (
    <section id="join" className="section-container bg-primary text-primary-foreground">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How to Join SMC
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="text-center space-y-4 slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold mb-4">
              <step.icon className="h-10 w-10 text-gold" />
            </div>
            <h3 className="text-2xl font-bold">Step {index + 1}</h3>
            <h4 className="text-xl font-semibold text-gold">{step.title}</h4>
            <p className="text-primary-foreground/90">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center slide-up" style={{ animationDelay: '0.3s' }}>
        <Button 
          variant="gold" 
          size="lg"
          className="text-lg px-12"
          onClick={() => window.open('https://chat.whatsapp.com/', '_blank')}
        >
          Join the WhatsApp Group
        </Button>
      </div>
    </section>
  );
};

export default Join;