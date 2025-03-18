import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ComingSoon from "../components/ComingSoon";
import FAQ from "../components/FAQ";
import Borderless from "../components/Borderless";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="div-fluid" >
    <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <ComingSoon />
      <FAQ />
      <Borderless/>
    </ div>
  );
};

export default LandingPage;
