import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const Contact = () => {
  const { data } = useWordPressHomepageQuery();
  const contact = data?.contact;
  const email = contact?.email || "smcommittee@uw.edu";
  const linkedin = contact?.linkedin || "https://www.linkedin.com/company/uw-foster-specialty-masters-student-club/";
  const instagram = contact?.instagram || "https://www.instagram.com/smclub_uw/";

  const label = "text-xs font-extrabold uppercase tracking-[0.12em] text-smc-accent";
  const value = "mt-1";
  const link = "text-smc-accent underline";

  return (
    <section id="contact" className="bg-white scroll-mt-[68px]" aria-labelledby="contact-title">
      <div className="home-container py-12">
        <h2 id="contact-title" className="section-title">Get in Touch</h2>
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          <div><dt className={label}>Email</dt><dd className={value}><a href={`mailto:${email}`} className={link}>{email}</a></dd></div>
          <div><dt className={label}>LinkedIn</dt><dd className={value}><a href={linkedin} target="_blank" rel="noopener noreferrer" className={link}>UW Foster Specialty Masters Student Club</a></dd></div>
          <div><dt className={label}>Instagram</dt><dd className={value}><a href={instagram} target="_blank" rel="noopener noreferrer" className={link}>@smclub_uw</a></dd></div>
          <div><dt className={label}>Address</dt><dd className={value}>UW Foster School of Business, PACCAR Hall, Seattle, WA 98195</dd></div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
