import { UserPlus, MessageCircle, Calendar, Users, Trophy, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JoinClub = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Fill out our SMC membership form to get started and become an official member"
    },
    {
      icon: MessageCircle,
      title: "Join WhatsApp",
      description: "Connect with the community in our active group chat for updates and networking"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in meetings, workshops, case competitions & networking events"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with fellow specialty master's students and industry professionals"
    },
    {
      icon: Trophy,
      title: "Career Development",
      description: "Access to exclusive workshops, case competitions, and career resources"
    },
    {
      icon: Cpu,
      title: "AI & Tech Projects",
      description: "Collaborate on cutting-edge AI projects and innovation initiatives"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 slide-up">
            Join SMC Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 slide-up" style={{ animationDelay: '0.1s' }}>
            Become part of a thriving community of MSBA, MSIS, MSCM, MSA students at UW Foster
          </p>
          <Button 
            variant="gold" 
            size="lg"
            className="text-lg px-12 slide-up"
            style={{ animationDelay: '0.2s' }}
            onClick={() => window.open('https://chat.whatsapp.com/', '_blank')}
          >
            Join the WhatsApp Group
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-background">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Join SMC?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="card-hover border-2 border-lavender bg-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How to Join
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4">
                <step.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Step {index + 1}</h3>
              <h4 className="text-xl font-semibold text-gold">{step.title}</h4>
              <p className="text-foreground">{step.description}</p>
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

      {/* CTA Section */}
      <section className="section-container bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join hundreds of specialty master's students building their network and careers at Foster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gold" 
              size="lg"
              className="text-lg px-8"
              onClick={() => window.open('https://chat.whatsapp.com/', '_blank')}
            >
              Join WhatsApp Group
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinClub;
