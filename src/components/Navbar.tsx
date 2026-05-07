import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import smcLogo from "@/assets/smc-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string, hash?: string) => {
    setIsOpen(false);
    
    if (hash && location.pathname === "/") {
      // Already on home page, just scroll to section
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (hash) {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Regular navigation
      navigate(path);
    }
  };

  const navLinks = [
    { label: "Home", path: "/", hash: null },
    { label: "Team", path: "/team", hash: null },
    { label: "Join", path: "/join", hash: null },
    { label: "Articles", path: "/articles", hash: null },
    { label: "Newsletter", path: "/newsletters", hash: null },
    { label: "Events", path: "/events", hash: null },
    { label: "Contact", path: "/", hash: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-lg shadow-lg border-b border-border py-2" 
          : "bg-background/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavigation("/")}
            className="hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          >
            <img 
              src={smcLogo} 
              alt="Specialty Masters Committee" 
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-12 md:h-14" : "h-14 md:h-20"}`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path, link.hash || undefined)}
                className="px-4 py-2 text-foreground hover:text-primary font-medium transition-all duration-200 relative group rounded-lg hover:bg-muted/50"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            ))}
            <Button
              variant="gold"
              size="default"
              className="ml-4"
              onClick={() => window.open('https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105', '_blank')}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-primary hover:bg-muted rounded-xl transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path, link.hash || undefined)}
                  className="text-left px-4 py-3 text-foreground hover:text-primary hover:bg-muted/70 rounded-xl font-medium transition-all duration-200 active:scale-[0.98]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105', '_blank');
                  }}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
