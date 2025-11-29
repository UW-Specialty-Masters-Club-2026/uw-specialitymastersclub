import paccarhallImage from "@/assets/paccar-hall.jpg";

const About = () => {
  return (
    <section className="section-container bg-lavender">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            About the Specialty Masters Club
          </h2>
          <div className="w-24 h-1 bg-gold" />
          <p className="text-lg text-foreground leading-relaxed">
            The Specialty Masters Club (SMC) at the UW Foster School brings together students across MSBA, MSIS, MSGF, MSA and other specialized programs.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Our mission is to create belonging, industry exposure, and skill-building opportunities through networking, competitions, and AI-driven projects.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            We foster a collaborative environment where specialty master's students can connect, grow, and prepare for successful careers in their respective fields.
          </p>
        </div>
        
        <div className="slide-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src={paccarhallImage} 
            alt="PACCAR Hall at UW Foster School of Business"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;