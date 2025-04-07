import React from "react";
import Kriacardhero from "../components/Kriacardhero";
import Borderless from "../components/Borderless";
import Navigation from "../components/Navbar";
import Setup from "../components/Setup";
import Fortified from "../components/Fortified";
import Footer from "../components/Footer";

const KriaCard = () => {
  return (
    <div className="div-fluid">
      <Navigation />
      <Kriacardhero />
      {/* <Fortified /> */}
      {/* <Setup /> */}

      {/* <Borderless /> */}

      <Footer />
    </div>
  );
};

export default KriaCard;
