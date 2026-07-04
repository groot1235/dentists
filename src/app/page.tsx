import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <main className="flex-1">
        <Hero />
        <Treatments />
        <About />
        <Testimonials />
        <Gallery />
      </main>
      
      {/* Footer Details */}
      <Footer />
      
      {/* Portals & Global Sticky Triggers */}
      <BookingModal />
      <StickyCTA />
    </>
  );
}
