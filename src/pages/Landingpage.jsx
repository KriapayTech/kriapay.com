import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Comingsoon from "../components/Comingsoon";
import FAQ from "../components/FAQ";
import Borderless from "../components/Borderless";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Kriapay – Pay Less to Send More";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease using Kriapay. Pay less to send more."
      );
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "Kriapay – Pay Less to Send More");
    }

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease using Kriapay. Pay less to send more."
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      // Using Cloudinary URL for the image
      ogImage.setAttribute(
        "content",
        "https://res.cloudinary.com/dhap3isd2/image/upload/v1745256796/Kriapay%20website/yva74u7wbqsur9ra2a10.png"
      );
    }

    const twitterCard = document.querySelector("meta[name='twitter:card']");
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    }

  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="bg-white max-w-full">
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
