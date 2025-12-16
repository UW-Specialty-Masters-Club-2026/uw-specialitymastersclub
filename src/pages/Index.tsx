import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Join from "@/components/Join";
import Projects from "@/components/Projects";
import JoinTeam from "@/components/JoinTeam";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Events />
      <Join />
      <Projects />
      <JoinTeam />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;