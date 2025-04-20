import React from "react";
import Privacyhero from "../components/Privacyhero";
import PrivacyBody from "../components/PrivacyBody";
import Navigation from "../components/Navbar";
import Footerterms from "../components/Footerterms";

const Privacypolicies = () => {
  return (
    <div className="div-fluid">
      <Navigation />
      <Privacyhero />
      <PrivacyBody />
      <Footerterms />
    </div>
  );
};

export default Privacypolicies;
