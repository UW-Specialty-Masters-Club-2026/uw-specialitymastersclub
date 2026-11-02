import { Link } from "react-router-dom";

const Newsletter = () => (
  <section id="newsletter" className="bg-wash py-20">
    <div className="home-container">
      <h2 className="display text-5xl text-brand-vivid mb-5">Newsletter</h2>
      <p className="text-brand-ink mb-5">Stay updated with the latest news, events, and opportunities from SMC</p>
      <Link
        to="/newsletters"
        className="inline-block px-[28px] py-3 text-sm font-bold uppercase tracking-[0.12em] border-2 border-brand-ink text-brand-ink hover:bg-background transition-colors"
      >
        View Newsletters
      </Link>
    </div>
  </section>
);

export default Newsletter;
