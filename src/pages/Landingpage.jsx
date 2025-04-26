import React from "react";
import { Helmet } from "react-helmet-async"; 
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
    <div className="bg-white max-w-full">
      <Helmet>
        <title>Kriapay — Seamless Global Transactions for Africa</title>
        <meta
          name="description"
          content="Send and receive money across borders with ease. Kriapay offers secure, fast, and low-cost transfers tailored for Africans."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Kriapay — Seamless Global Transactions for Africa" />
        <meta
          property="og:description"
          content="Send and receive money across borders with ease. Kriapay offers secure, fast, and low-cost transfers tailored for Africans."
        />
        <meta property="og:image" content="https://res.cloudinary.com/dhap3isd2/image/upload/v1745256796/Kriapay%20website/yva74u7wbqsur9ra2a10.png" />
        <meta property="og:url" content="https://kriapay.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kriapay — Seamless Global Transactions for Africa" />
        <meta
          name="twitter:description"
          content="Send and receive money across borders with ease. Kriapay offers secure, fast, and low-cost transfers tailored for Africans."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dhap3isd2/image/upload/v1745256796/Kriapay%20website/yva74u7wbqsur9ra2a10.png" />
      </Helmet>

      <Navigation />
      <Hero />
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
