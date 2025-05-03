import React, { useEffect } from "react";
import Askhero from "../components/Askhero";
import Navigation from "../components/Navbar";
import Transacting from "../components/Transacting";
import Create from "../components/Create";
import SupportContact from "../components/SupportContact";
import Footer from "../components/Footer";

const Ask = () => {
  useEffect(() => {
    // Set the page title
    document.title = "Ask Kriapay – Your Questions Answered";

    // Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Need help with your Kriapay account, Kriacard, or transactions? Ask Kriapay gives you everything you need to know about signing up, funding, transacting, and reaching support."
      );
    }

    // OG Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "Ask Kriapay – Everything You Need to Know");
    }

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Get answers to questions on sign-up, deposits, transfers, Kriacard, and more. Our Help Center has you covered."
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute(
        "content",
        "https://res.cloudinary.com/dhap3isd2/image/upload/v1746274299/Kriapay%20website/hr6iw8gykort8y7zlaie.png"
      );
    }

    // Twitter Meta
    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Ask Kriapay – Your Questions Answered");
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']");
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Need help with anything Kriapay? From creating an account to funding your wallet—we've got answers."
      );
    }

    const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute(
        "content",
        "https://res.cloudinary.com/dhap3isd2/image/upload/v1746274299/Kriapay%20website/hr6iw8gykort8y7zlaie.png"
      );
    }
  }, []);


  return (
    <div className="div-fluid">
      <Navigation />
      <Askhero />
      <Create/>

      <Transacting/>
      <SupportContact/>
      <Footer />
    </div>
  );
};

export default Ask;
