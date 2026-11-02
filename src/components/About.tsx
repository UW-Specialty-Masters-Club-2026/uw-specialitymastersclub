import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

/** About + 3-pillar strategy share one lavender band, as in the reference layout. */
const About = () => {
  const { data } = useWordPressHomepageQuery();
  const about = data?.about;
  const pillars = data?.pillars || [];

  return (
    <section className="bg-wash py-20">
      <div className="home-container">
        <h2 className="display text-5xl text-brand-vivid mb-5">
          {about?.title || "About the Specialty Masters Club"}
        </h2>
        <div className="max-w-[700px] space-y-4">
          {(about?.paragraphs || []).map((paragraph) => (
            <p key={paragraph} className="text-base leading-[1.75] text-brand-ink">{paragraph}</p>
          ))}
        </div>

        {pillars.length > 0 && (
          <>
            <h2 className="display text-5xl text-brand-vivid mt-16 mb-3">Our 3-Pillar Strategy</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-background px-6 py-8">
                  <h3 className="text-lg font-bold text-brand-ink mb-3">{pillar.title}</h3>
                  <ul className="space-y-1">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex gap-3 text-brand-ink leading-[1.7]">
                        <span className="mt-[9px] w-[7px] h-[7px] shrink-0 rounded-full border border-brand-vivid" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
