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
            <h3 className="text-2xl font-bold mb-4">Specialty Masters Club</h3>
            <p className="text-primary-foreground/80">
              Empowering MSBA, MSIS, MSGF & Specialty Master's Students at UW Foster School of Business.
            </p>
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
              <a href="mailto:smc-uw@foster.edu" className="block hover:text-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="text-primary-foreground/80">
              UW Foster School of Business<br />
              PACCAR Hall<br />
              Seattle, WA 98195
            </p>
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