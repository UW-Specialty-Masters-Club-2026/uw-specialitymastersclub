import { useNavigate } from "react-router-dom";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const REGISTER_URL = "https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105";

const Hero = () => {
  const navigate = useNavigate();
  const { data } = useWordPressHomepageQuery();
  const hero = data?.hero;

  return (
    <section className="relative overflow-hidden pt-[68px] bg-brand-deep">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={hero?.image ? { backgroundImage: `url(${hero.image})` } : undefined}
      >
        <div className="absolute inset-0 bg-brand-deep/75" />
      </div>

      <div className="relative z-10 home-container py-16 text-primary-foreground fade-in">
        <span className="w-24 h-24 rounded-full bg-background flex items-center justify-center overflow-hidden mb-5">
          {data?.logo && <img src={data.logo} alt="Specialty Masters Club logo" className="w-[72px] h-[72px] object-contain" />}
        </span>
        <h1 className="display text-6xl md:text-8xl mb-6 slide-up">
          {hero?.title || "Specialty Masters Club"}
        </h1>
        <p className="text-lg max-w-md mb-6 opacity-95 slide-up">
          {hero?.subtitle || "Empowering MSBA, MSIS, MSCM & Specialty Master’s Students at UW Foster"}
        </p>
        <div className="flex flex-wrap gap-3 slide-up">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] py-3.5 text-sm font-bold uppercase tracking-[0.12em] bg-brand-vivid text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {hero?.primaryCta || "Join the Club"}
          </a>
          <button
            onClick={() => navigate("/events")}
            className="px-[28px] py-3 text-sm font-bold uppercase tracking-[0.12em] border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            {hero?.secondaryCta || "Upcoming Events"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
