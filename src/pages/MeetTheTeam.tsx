import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Camera } from "lucide-react";

// Team member images
import alexImg from "@/assets/team/alex.jpg";
import anushkaImg from "@/assets/team/anushka.jpg";
import huyImg from "@/assets/team/huy.jpg";
import nattImg from "@/assets/team/natt.jpg";
import paridhiImg from "@/assets/team/paridhi.jpeg";
import shivaniImg from "@/assets/team/shivani.jpg";
import venkatImg from "@/assets/team/venkat.jpeg";
import vinayakImg from "@/assets/team/vinayak.jpeg";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Anushka Mathur",
      role: "Secretary, Founder",
      image: anushkaImg,
      linkedin: "https://www.linkedin.com/in/anushka-mktg-analytics/",
      isPlaceholder: false
    },
    {
      name: "Natt S",
      role: "Tech and Product",
      image: nattImg,
      linkedin: "https://www.linkedin.com/in/natthapat-sakulborrirug/",
      isPlaceholder: false
    },
    {
      name: "Venkat Kowshik",
      role: "Strategy",
      image: venkatImg,
      linkedin: "https://www.linkedin.com/in/venkat-kowshik-277a1b19a/",
      isPlaceholder: false
    },
    {
      name: "Shivani Raut",
      role: "Operations",
      image: shivaniImg,
      linkedin: "https://www.linkedin.com/in/raut-shivani/",
      isPlaceholder: false
    },
    {
      name: "Huy Nguyen",
      role: "Case Comp",
      image: huyImg,
      linkedin: "https://www.linkedin.com/in/huy-nguyen-m/",
      isPlaceholder: false
    },
    {
      name: "Alex Weng",
      role: "Tech and Product",
      image: alexImg,
      linkedin: "https://www.linkedin.com/in/alexweng97/",
      isPlaceholder: false
    },
    {
      name: "Paridhi Gupta",
      role: "Case Comp",
      image: paridhiImg,
      linkedin: "https://www.linkedin.com/in/paridhigupta1999/",
      isPlaceholder: false
    },
    {
      name: "Vinayak Malhotra",
      role: "Alumni Outreach",
      image: vinayakImg,
      linkedin: "https://www.linkedin.com/in/vinayakm93/",
      isPlaceholder: false
    },
    {
      name: "Coming Soon",
      role: "Marketing & Comm",
      image: null,
      linkedin: null,
      isPlaceholder: true
    },
    {
      name: "Coming Soon",
      role: "Marketing & Comm",
      image: null,
      linkedin: null,
      isPlaceholder: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 slide-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              MEET THE
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              CORE TEAM
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="card-hover bg-card border-0 shadow-lg slide-up overflow-hidden group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4 text-center">
                  {/* Photo Container */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted shadow-md">
                      {member.isPlaceholder ? (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <Camera className="w-12 h-12 text-muted-foreground/50" />
                        </div>
                      ) : (
                        <img 
                          src={member.image!} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-gold uppercase tracking-wide mb-3">
                    {member.role}
                  </p>

                  {/* LinkedIn */}
                  {member.linkedin && !member.isPlaceholder && (
                    <button 
                      className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors duration-200"
                      onClick={() => window.open(member.linkedin!, '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-xs font-medium">Connect</span>
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join CTA */}
          <div className="text-center mt-16 slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-muted-foreground mb-4">
              Interested in joining the team?
            </p>
            <a 
              href="/join"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MeetTheTeam;
