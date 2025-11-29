import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>
      
      <div className="relative z-10 section-container text-center text-primary-foreground fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 slide-up">
          Specialty Masters Club
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto opacity-95 slide-up" style={{ animationDelay: '0.1s' }}>
          Empowering MSBA, MSIS, MSGF & Specialty Master's Students at UW Foster
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="gold" 
            size="lg" 
            onClick={() => scrollToSection('join')}
            className="min-w-[200px]"
          >
            Join the Club
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline-gold" 
            size="lg"
            onClick={() => scrollToSection('events')}
            className="min-w-[200px]"
          >
            Upcoming Events
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;