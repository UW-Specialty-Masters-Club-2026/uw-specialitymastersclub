import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Events from "@/components/Events";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Events />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EventsPage;
