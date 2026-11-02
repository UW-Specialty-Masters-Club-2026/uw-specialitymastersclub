import { useWordPressHomepageQuery } from "@/lib/wordpress/hooks";

/** About + 3-pillar strategy sit together on the page background, as in the reference layout. */
const About = () => {
  const { data } = useWordPressHomepageQuery();
  const about = data?.about;
  const pillars = data?.pillars || [];

  return (
    <section className="home-container pt-10 pb-16" aria-labelledby="about">
      <h2 id="about" className="section-title">
        {about?.title || "About the Specialty Masters Club"}
      </h2>
      <div className="max-w-[68ch] text-smc-body leading-[1.7]">
        {(about?.paragraphs || []).map((paragraph) => (
          <p key={paragraph} className="my-4">{paragraph}</p>
        ))}
      </div>

      {pillars.length > 0 && (
        <>
          <h2 className="section-title !mt-12">Our 3-Pillar Strategy</h2>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-4 mb-4">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="bg-white px-6 py-7">
                <h3 className="text-lg font-bold leading-[1.3] mb-2">{pillar.title}</h3>
                <ul className="list-[circle] pl-[18px] mb-3 text-smc-body leading-[1.7] marker:text-smc-accent">
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default About;
