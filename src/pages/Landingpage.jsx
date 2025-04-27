import React from "react";
import { Helmet } from 'react-helmet-async';
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
      {/* Helmet comes first inside the div */}
      <Helmet>
        <title>Pay Less to Send More | Kriapay - Seamless Cross-Border Payments Across Africa</title>
        <meta name="description" content="Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease using Kriapay. Pay less to send more."  />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="Pay Less to Send More | Kriapay - Seamless Cross-Border Payments Across Africa" />
        <meta name="twitter:description" content="Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease using Kriapay." />
        <meta name="twitter:image" content="https://kriapay.com/twitter-card.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Open Graph for Facebook, LinkedIn, etc */}
        <meta property="og:title" content="Pay Less to Send More | Kriapay - Seamless Cross-Border Payments Across Africa" />
        <meta property="og:description" content="Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease using Kriapay." />
        <meta property="og:image" content="https://kriapay.com/twitter-card.png" />
        <meta property="og:url" content="https://kriapay.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Your actual page content */}
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
