import React from "react";
import Kriacardhero from "../components/Kriacardhero";
import Borderless from "../components/Borderless";
import Navigation from "../components/Navbar";
import Setup from "../components/Setup";
import Fortified from "../components/Fortified";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';


const KriaCard = () => {
  return (
    <div className="div-fluid">
      {/* Helmet comes first inside the div */}
      <Helmet>
        <title>Borderless Payments for Africa | Kriapayyyyy</title>
        <meta name="description" content="Experience seamless, secure, and affordable cross-border transactions with Kriapay."  />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Borderless Payments for Africa | Kriapay" />
        <meta name="twitter:description" content="Experience seamless, secure, and affordable cross-border transactions with Kriapay." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Open Graph for Facebook, LinkedIn, etc */}
        <meta property="og:title" content="Borderless Payments for Africa | Kriapay" />
        <meta property="og:description" content="Experience seamless, secure, and affordable cross-border transactions with Kriapay." />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />
        <meta property="og:url" content="https://kriapay.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />
      <Kriacardhero />
      <Fortified />
      <Setup />

      <Borderless />

      <Footer />
    </div>
  );
};

export default KriaCard;
