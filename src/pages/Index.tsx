import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Join from "@/components/Join";
import Projects from "@/components/Projects";
import JoinTeam from "@/components/JoinTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Pillars />
      <Events />
      <Join />
      <Projects />
      <JoinTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;