import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeEvents from "@/components/HomeEvents";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-smc-page text-smc-ink">
    <Navbar />
    <main>
      <Hero />
      <About />
      <HomeEvents />
      <Newsletter />
      <Contact />
    </main>
    <div className="h-16" aria-hidden="true" />
    <Footer />
  </div>
);

export default Index;
