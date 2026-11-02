import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const Contact = () => {
  const { data } = useWordPressHomepageQuery();
  const contact = data?.contact;
  const email = contact?.email || "smcommittee@uw.edu";
  const linkedin = contact?.linkedin || "https://www.linkedin.com/company/uw-foster-specialty-masters-student-club/";
  const instagram = contact?.instagram || "https://www.instagram.com/smclub_uw/";

  const label = "text-xs font-bold uppercase tracking-[0.2em] text-brand-vivid mb-1";
  const link = "text-brand-vivid underline underline-offset-2 hover:text-brand-ink";

  return (
    <section id="contact" className="bg-background py-20 scroll-mt-16">
      <div className="home-container">
        <h2 className="display text-5xl text-brand-vivid mb-4">Get in Touch</h2>
        <dl className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div><dt className={label}>Email</dt><dd><a href={`mailto:${email}`} className={link}>{email}</a></dd></div>
          <div><dt className={label}>LinkedIn</dt><dd><a href={linkedin} target="_blank" rel="noopener noreferrer" className={link}>UW Foster Specialty Masters Student Club</a></dd></div>
          <div><dt className={label}>Instagram</dt><dd><a href={instagram} target="_blank" rel="noopener noreferrer" className={link}>@smclub_uw</a></dd></div>
          <div><dt className={label}>Address</dt><dd className="text-brand-ink">UW Foster School of Business, PACCAR Hall, Seattle, WA 98195</dd></div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
