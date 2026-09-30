import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

const About = () => {
  const { data } = useWordPressHomepageQuery();
  const about = data?.about;
  return (
    <section className="section-container bg-lavender">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            {about?.title || "About the Specialty Masters Club"}
          </h2>
          <div className="w-24 h-1 bg-gold" />
          {(about?.paragraphs || []).map((paragraph) => <p key={paragraph} className="text-lg text-foreground leading-relaxed">{paragraph}</p>)}
        </div>
        
        <div className="slide-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src={about?.image || ""}
            alt="PACCAR Hall at UW Foster School of Business"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
