import React from "react";
import Askhero from "../components/Askhero";
import Navigation from "../components/Navbar";
import Transacting from "../components/Transacting";
import Create from "../components/Create";
import SupportContact from "../components/SupportContact";
import Footer from "../components/Footer";

const Ask = () => {
  return (
    <div className="div-fluid">
      <Navigation />
      <Askhero />
      <Create/>

      <Transacting/>
      {/* <SupportContact/> */}
      <Footer />
    </div>
  );
};

export default Ask;
