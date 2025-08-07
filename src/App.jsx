import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Value from "./components/Value";
import Residences from "./components/Residences";
import Contact from "./components/Contact";
import WhatsappButton from "./components/WhatsappButton";
import MapSection from "./components/MapSection";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Value />
      <Residences/>
      <Contact/>
      <WhatsappButton/>
      <MapSection />
      <Gallery/>
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default App;