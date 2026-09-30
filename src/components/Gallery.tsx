import { useWordPressGalleryQuery } from "@/lib/wordpress/hooks";

const Gallery = () => {
  const { data: images = [] } = useWordPressGalleryQuery();
  /* const images = [
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      caption: "SMC Networking Mixer"
    },
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      caption: "Foster AI Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      caption: "Seattle Public Library AI Session"
    },
    {
      url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop",
      caption: "Case Competition Prep"
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      caption: "Hackathon Sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      caption: "Team Collaboration"
    }
  ]; */

  return (
    <section className="section-container bg-background">
      <div className="text-center mb-16 slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg aspect-[4/3] card-hover slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={image.url} 
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-primary-foreground text-lg font-semibold px-4 text-center">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
