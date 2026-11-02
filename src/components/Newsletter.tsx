import { Link } from "react-router-dom";

const Newsletter = () => (
  <section id="newsletter" className="home-container pt-10 pb-16" aria-labelledby="newsletter-title">
    <h2 id="newsletter-title" className="section-title">Newsletter</h2>
    <p className="my-4 text-smc-body leading-relaxed">Stay updated with the latest news, events, and opportunities from SMC</p>
    <Link to="/newsletters" className="btn-ref btn-ref-outline">View Newsletters</Link>
  </section>
);

export default Newsletter;
