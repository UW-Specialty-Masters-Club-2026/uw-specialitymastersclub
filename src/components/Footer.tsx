import { Link } from "react-router-dom";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const LINKEDIN = "https://www.linkedin.com/company/uw-foster-specialty-masters-student-club/";
const INSTAGRAM = "https://www.instagram.com/smclub_uw/";
const REGISTER_URL = "https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105";

const heading = "text-xs font-bold uppercase tracking-[0.2em] text-highlight mb-3";
const link = "block underline underline-offset-2 hover:text-highlight transition-colors";

const Footer = () => {
  const { data } = useWordPressHomepageQuery();
  return (
    <footer className="bg-brand-deep text-primary-foreground text-sm">
      <div className="home-container pt-10 pb-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="w-14 h-14 rounded-full bg-background flex items-center justify-center overflow-hidden mb-6">
            {data?.logo && <img src={data.logo} alt="Specialty Masters Club" className="w-10 h-10 object-contain" />}
          </span>
          <p className="leading-relaxed text-primary-foreground/85">
            Empowering MSBA, MSIS, MSCM & Specialty Master’s Students at UW Foster School of Business.
          </p>
        </div>
        <div>
          <h4 className={heading}>Quick Links</h4>
          <nav className="space-y-1">
            <Link to="/" className={link}>Home</Link>
            <Link to="/events" className={link}>Events</Link>
            <Link to="/articles" className={link}>Articles</Link>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className={link}>Join SMC</a>
          </nav>
        </div>
        <div>
          <h4 className={heading}>Address</h4>
          <p className="leading-relaxed text-primary-foreground/85">UW Foster School of Business<br />PACCAR Hall<br />Seattle, WA 98195</p>
        </div>
        <div>
          <h4 className={heading}>Follow Us</h4>
          <div className="space-y-1">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={link}>Instagram @smclub_uw</a>
            <a href="mailto:smcommittee@uw.edu" className={link}>smcommittee@uw.edu</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs text-primary-foreground/80">
        &copy; 2026 Specialty Masters Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
