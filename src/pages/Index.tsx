import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Join from "@/components/Join";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
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
      <Leadership />
      <Gallery />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;