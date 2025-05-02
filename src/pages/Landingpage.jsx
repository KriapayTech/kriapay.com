import React from "react";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";  // adjust path if necessary
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Comingsoon from "../components/Comingsoon";
import FAQ from "../components/FAQ";
import Borderless from "../components/Borderless";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white max-w-full">
      <Navigation />
      <Hero />
      <Ticker />
      <Features />
      <Testimonials />
      <Comingsoon />
      <FAQ />
      <Borderless />
      <Footer />
    </div>
  );
};

export default LandingPage;
