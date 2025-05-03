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
        "Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease with Kriapay. Pay less to send more."
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
        "Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease with Kriapay. Pay less to send more."
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

    const twitterTitle = document.querySelector("meta[name='twitter:title']");
     if (twitterTitle) {
       twitterTitle.setAttribute("content", "Kriapay – Pay Less to Send More");
     }
 
     const twitterDescription = document.querySelector("meta[name='twitter:description']");
     if (twitterDescription) {
       twitterDescription.setAttribute(
         "content",
         "Experience affordable, secure, and effortless cross-border money transfers across Africa. Send, receive, and convert currencies with ease with Kriapay. Pay less to send more."
       );
     }
 
     const twitterImage = document.querySelector("meta[name='twitter:image']");
     if (twitterImage) {
       twitterImage.setAttribute("content", "https://res.cloudinary.com/dhap3isd2/image/upload/v1745256796/Kriapay%20website/yva74u7wbqsur9ra2a10.png");
     }

    // Additional metadata
    const metaAuthor = document.querySelector("meta[name='author']");
    if (metaAuthor) {
      metaAuthor.setAttribute("content", "Kriapay Team");
    }

    const metaRobots = document.querySelector("meta[name='robots']");
    if (metaRobots) {
      metaRobots.setAttribute("content", "index, follow");
    }

    const metaLocation = document.querySelector("meta[name='location']");
    if (metaLocation) {
      metaLocation.setAttribute("content", "Onijanikin Street, Alasia, Lagos, Nigeria");
    }

    const metaEmail = document.querySelector("meta[name='email']");
    if (metaEmail) {
      metaEmail.setAttribute("content", "info@kriapay.com");
    }

    const metaLegal = document.querySelector("meta[name='legal']");
    if (metaLegal) {
      metaLegal.setAttribute("content", "Kria Technologies Ltd. is registered with the Corporate Affairs Commission, RC 7547062");
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
