import React, { useEffect } from "react";
import  Companyhero from "../components/Companyhero"
import Navigation from "../components/Navbar";
import Team from "../components/Team";
import Barriers from "../components/Barriers";
import Footer from "../components/Footer";



const Company = () => {
  useEffect(() => {
    // Title
    document.title = "Company – Kriapay";
  
    // Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "We are pioneers of borderless financial access for Africans. Kriapay is reshaping the future of finance in Africa by enabling inclusive, frictionless, and secure global transactions."
      );
    }
  
    // Meta Keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Kriapay, Kriacard, cross-border payments, African fintech, global transactions, inclusive finance, frictionless payments, borderless banking, fintech Africa, secure transfers, send money Africa, financial technology, Kria Technologies, Sierra Leone"
      );
    }
  
    // Open Graph (OG) Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "Kriapay – Redefining Financial Connectivity for Africa");
    }
  
    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "We are pioneers of borderless financial access for Africans, reshaping the continent’s financial future through innovation, inclusion, and technology."
      );
    }
  
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute(
        "content",
        "https://res.cloudinary.com/dhap3isd2/image/upload/v1746272072/Kriapay%20website/woslgrhbpd4cio3nhues.png"
      );
    }
  
    // Twitter Meta
    const twitterCard = document.querySelector("meta[name='twitter:card']");
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    }
  
    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Kriapay – Redefining Financial Connectivity for Africa");
    }
  
    const twitterDescription = document.querySelector("meta[name='twitter:description']");
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "We’re breaking barriers together. Join us in reshaping the financial future of Africa through borderless, secure, and inclusive financial services."
      );
    }
  
    const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute(
        "content",
        "https://res.cloudinary.com/dhap3isd2/image/upload/v1746272072/Kriapay%20website/woslgrhbpd4cio3nhues.png"
      );
    }
  
    // Additional Metadata
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
      metaLegal.setAttribute(
        "content",
        "Kria Technologies Ltd. is registered with the Corporate Affairs Commission, RC 7547062"
      );
    }
  }, []);
  
  
  return (
    <div className="div-fluid" >
        <Navigation/>
        <Companyhero/>
        <Team/>
        <Barriers/>
        <Footer/>


     
    </ div>
  );
};

export default Company;
