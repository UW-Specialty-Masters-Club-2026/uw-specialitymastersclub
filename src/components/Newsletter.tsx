import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="section-container bg-primary">
      <div className="text-center slide-up">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-gold" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Newsletter
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-8" />
        <p className="text-xl text-white/80 mb-6">
          Stay updated with the latest news, events, and opportunities from SMC
        </p>
        <span className="inline-block px-6 py-2 bg-gold/20 text-gold rounded-full font-semibold">
          Coming Soon
        </span>
      </div>
    </section>
  );
};

export default Newsletter;
