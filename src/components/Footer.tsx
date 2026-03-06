import { Linkedin, Instagram } from "lucide-react";
import smcLogo from "@/assets/smc-logo.png";

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/specialty-masters-club-0789893a8/",
  instagram: "https://www.instagram.com/smclub_uw/",
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-gold">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img 
              src={smcLogo} 
              alt="Specialty Masters Club" 
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4">
              Empowering MSBA, MSIS, MSCM & Specialty Master's Students at UW Foster School of Business.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground/70 group-hover:text-gold transition-colors" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground/70 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button onClick={scrollToTop} className="block hover:text-gold transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('events')} className="block hover:text-gold transition-colors">
                Events
              </button>
              <button onClick={() => scrollToSection('join')} className="block hover:text-gold transition-colors">
                Join
              </button>
              <a href="mailto:smcommittee@uw.edu" className="block hover:text-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="text-primary-foreground/80 mb-4">
              UW Foster School of Business<br />
              PACCAR Hall<br />
              Seattle, WA 98195
            </p>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="space-y-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Specialty Masters Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;