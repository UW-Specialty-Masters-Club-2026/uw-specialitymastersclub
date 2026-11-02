import { Link } from "react-router-dom";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const LINKEDIN = "https://www.linkedin.com/company/uw-foster-specialty-masters-student-club/";
const INSTAGRAM = "https://www.instagram.com/smclub_uw/";
const REGISTER_URL = "https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105";

const heading = "text-xs font-bold uppercase tracking-[0.14em] text-smc-gold mb-2";
const link = "text-white underline";

const Footer = () => {
  const { data } = useWordPressHomepageQuery();
  return (
    <footer className="bg-smc-ink text-smc-lavender">
      <div className="max-w-[960px] mx-auto px-4 pt-10 pb-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 text-sm leading-[1.6]">
        <div>
          {data?.logo && (
            <img src={data.logo} alt="Specialty Masters Club" width={56} height={56} className="w-14 h-14 rounded-full bg-white" />
          )}
          <p className="my-[14px]">Empowering MSBA, MSIS, MSCM & Specialty Master’s Students at UW Foster School of Business.</p>
        </div>
        <div>
          <h2 className={heading}>Quick links</h2>
          <ul>
            <li><Link to="/" className={link}>Home</Link></li>
            <li><Link to="/events" className={link}>Events</Link></li>
            <li><Link to="/articles" className={link}>Articles</Link></li>
            <li><a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className={link}>Join SMC</a></li>
          </ul>
        </div>
        <div>
          <h2 className={heading}>Address</h2>
          <address className="not-italic">UW Foster School of Business<br />PACCAR Hall<br />Seattle, WA 98195</address>
        </div>
        <div>
          <h2 className={heading}>Follow us</h2>
          <ul>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={link}>Instagram @smclub_uw</a></li>
            <li><a href="mailto:smcommittee@uw.edu" className={link}>smcommittee@uw.edu</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-smc-lavender/20 p-4 text-center text-xs">
        &copy; {new Date().getFullYear()} Specialty Masters Club. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
