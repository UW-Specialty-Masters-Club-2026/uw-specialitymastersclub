import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Join from "@/components/Join";
import Projects from "@/components/Projects";
import JoinTeam from "@/components/JoinTeam";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pillars />

      {/* Events teaser linking to dedicated page */}
      <section className="section-container bg-lavender">
        <div className="text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Upcoming Q1 Events
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Check out our upcoming fireside chats, workshops, and networking events for this quarter.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2"
            onClick={() => navigate("/events")}
          >
            <Calendar className="h-5 w-5" />
            View All Events
          </Button>
        </div>
      </section>

      <Join />
      <Projects />
      <JoinTeam />
      <Newsletter />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;