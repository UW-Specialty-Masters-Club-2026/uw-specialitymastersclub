import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const REGISTER_URL = "https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105";

const navLinks = [
  { label: "Home", path: "/", hash: null },
  { label: "Team", path: "/team", hash: null },
  { label: "Articles", path: "/articles", hash: null },
  { label: "Newsletter", path: "/newsletters", hash: null },
  { label: "Events", path: "/events", hash: null },
  { label: "Skills", path: "/skills", hash: null },
  { label: "Contact", path: "/", hash: "#contact" },
];

const Navbar = () => {
  const { data } = useWordPressHomepageQuery();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, hash?: string) => {
    setIsOpen(false);
    if (hash && location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else if (hash) {
      navigate("/");
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      navigate(path);
    }
  };

  const isActive = (link: (typeof navLinks)[number]) => !link.hash && location.pathname === link.path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-deep">
      <div className="home-container h-[68px] flex items-center justify-between gap-6">
        <button onClick={() => handleNavigation("/")} className="flex items-center gap-2.5 shrink-0" aria-label="Specialty Masters Club home">
          <span className="w-10 h-10 rounded-full bg-background flex items-center justify-center overflow-hidden">
            {data?.logo && <img src={data.logo} alt="" className="w-8 h-8 object-contain" />}
          </span>
          <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-highlight">Specialty Masters Club</span>
        </button>

        <div className="hidden lg:flex items-center gap-[18px]">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.path, link.hash || undefined)}
              className={`text-sm font-semibold transition-colors hover:text-highlight ${isActive(link) ? "text-highlight" : "text-primary-foreground"}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-3 py-1.5 text-sm font-semibold bg-highlight text-brand-ink hover:opacity-90 transition-opacity"
          >
            Join
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-primary-foreground" aria-label="Toggle menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-deep border-t border-primary-foreground/15">
          <div className="home-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path, link.hash || undefined)}
                className={`text-left py-2.5 font-semibold ${isActive(link) ? "text-highlight" : "text-primary-foreground"}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 py-3 text-center font-semibold bg-highlight text-brand-ink"
            >
              Join
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
