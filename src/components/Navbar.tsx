import { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLElement>(null);
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  // Publish the collapsed header height so pages can offset sticky and
  // anchored content below this fixed bar (it wraps to two rows on phones).
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => {
      if (!isOpenRef.current) document.documentElement.style.setProperty("--navbar-h", `${header.offsetHeight}px`);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

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

  const isActive = (link: (typeof navLinks)[number]) =>
    !link.hash && (link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path));

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-smc-ink text-white">
      <div className="max-w-[960px] mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <button
          onClick={() => handleNavigation("/")}
          className="inline-flex items-center gap-2.5 text-[13px] font-extrabold tracking-[0.14em] text-smc-gold"
          aria-label="Specialty Masters Club home"
        >
          <span className="w-10 h-10 rounded-full bg-white overflow-hidden">
            {data?.logo && <img src={data.logo} alt="" width={40} height={40} className="w-10 h-10" />}
          </span>
          <span>SPECIALTY MASTERS CLUB</span>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="min-[901px]:hidden min-h-10 px-3.5 border-2 border-smc-gold font-extrabold text-white"
          aria-expanded={isOpen}
          aria-controls="site-menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="site-menu"
          aria-label="Main"
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col items-start pt-2 pb-3 gap-x-6 gap-y-2 min-[901px]:flex min-[901px]:w-auto min-[901px]:flex-row min-[901px]:flex-wrap min-[901px]:items-center min-[901px]:p-0`}
        >
          <ul className="flex flex-col gap-3 min-[901px]:flex-row min-[901px]:flex-wrap min-[901px]:gap-x-[18px] min-[901px]:gap-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavigation(link.path, link.hash || undefined)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`text-sm font-semibold ${isActive(link) ? "text-smc-gold" : "text-smc-lavender"}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 min-[901px]:flex-row">
            <li>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-block px-3 py-1.5 text-sm font-semibold bg-smc-gold text-smc-ink"
              >
                Join
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
