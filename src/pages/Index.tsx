import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeEvents from "@/components/HomeEvents";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <HomeEvents />
    <Newsletter />
    <Contact />
    <div className="bg-wash h-16" aria-hidden="true" />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
