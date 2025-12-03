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
    { label: "Join", path: "/join", hash: null },
    { label: "Events", path: "/", hash: "#events" },
    { label: "Projects", path: "/", hash: "#projects" },
    { label: "Contact", path: "/", hash: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavigation("/")}
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={smcLogo} 
              alt="Specialty Masters Committee" 
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path, link.hash || undefined)}
                className="text-foreground hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc-o8C836NmjLx2ACf1QKpsGz4_1Jxi91O5yhbwY23-yVvLkg/viewform', '_blank')}
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.path, link.hash || undefined)}
                  className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc-o8C836NmjLx2ACf1QKpsGz4_1Jxi91O5yhbwY23-yVvLkg/viewform', '_blank');
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
