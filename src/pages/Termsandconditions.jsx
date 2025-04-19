import React from "react";
import ConditionsHero from "../components/ConditionsHero";
import Navigation from "../components/Navbar";
import ConditionsBody from "../components/ConditionsBody";
import Footerterms from "../components/Footerterms";

const Termsandconditions = () => {
  return (
    <div className="div-fluid">
      <Navigation />
      <ConditionsHero />
      <ConditionsBody />

      <Footerterms />
    </div>
  );
};

export default Termsandconditions;
