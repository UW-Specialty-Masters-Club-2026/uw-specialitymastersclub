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
import ScrollToTop from "@/components/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
};

export default Index;