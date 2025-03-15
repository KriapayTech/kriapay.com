import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ComingSoon from "./ComingSoon";
import FAQ from "./FAQ";
import Borderless from "./Borderless";

const LandingPage = () => {
  return (
    <div className="div-fluid" >
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
