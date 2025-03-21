import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Comingsoon from "../components/Comingsoon";
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
      <Comingsoon />
      <FAQ />
      <Borderless/>
      <Footer/>

    </ div>
  );
};

export default LandingPage;
