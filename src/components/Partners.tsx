import { useWordPressPartnersQuery } from "@/lib/wordpress/hooks";

const Partners = () => {
  const { data: partners = [] } = useWordPressPartnersQuery();
  /* const partners = [
    {
      name: "UW Foster",
      logo: "https://foster.uw.edu/wp-content/uploads/2018/09/Foster-logo-purple.png"
    },
    {
      name: "AI Awareness Society",
      logo: "https://via.placeholder.com/200x80/4B2E83/FFFFFF?text=AI+Awareness"
    },
    {
      name: "Seattle Public Library",
      logo: "https://via.placeholder.com/200x80/4B2E83/FFFFFF?text=SPL"
    },
    {
      name: "Industry Partners",
      logo: "https://via.placeholder.com/200x80/4B2E83/FFFFFF?text=Partners"
    }
  ]; */

  return (
    <section className="section-container bg-lavender">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Partners & Collaborators
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="flex items-center justify-center p-6 bg-card rounded-lg card-hover grayscale hover:grayscale-0 transition-all slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
