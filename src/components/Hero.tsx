import { Link } from "react-router-dom";
import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";
import paccarHallAutumn from "@/assets/paccar-hall-autumn.png";

const REGISTER_URL = "https://smcfoster.notion.site/3580984ab5b68069996bf623248354cb?pvs=105";

const Hero = () => {
  const { data } = useWordPressHomepageQuery();
  const hero = data?.hero;

  return (
    <section
      className="relative mt-[68px] bg-smc-ink bg-cover bg-center"
      style={{ backgroundImage: `url(${paccarHallAutumn})` }}
    >
      <div className="absolute inset-0 bg-[#2d0a68c7]" aria-hidden="true" />
      <div className="relative max-w-[960px] mx-auto px-4 pt-16 pb-[72px] text-white">
        {data?.logo && (
          <img src={data.logo} alt="" width={96} height={96} className="w-24 h-24 rounded-full bg-white mb-4" />
        )}
        <h1 className="display tracking-normal text-white text-[clamp(44px,9vw,80px)] mb-4">
          {hero?.title || "Specialty Masters Club"}
        </h1>
        <p className="text-smc-lavender max-w-[40ch] text-lg leading-normal my-[18px]">
          {hero?.subtitle || "Empowering MSBA, MSIS, MSCM & Specialty Master’s Students at UW Foster"}
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-ref">
            {hero?.primaryCta || "Join the Club"}
          </a>
          <Link to="/events" className="btn-ref btn-ref-light">
            {hero?.secondaryCta || "Upcoming Events"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
