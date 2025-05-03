import React, { useEffect } from "react";
import Kriacardhero from "../components/Kriacardhero";
import Borderless from "../components/Borderless";
import Navigation from "../components/Navbar";
import Setup from "../components/Setup";
import Fortified from "../components/Fortified";
import Footer from "../components/Footer";

const KriaCard = () => {
  useEffect(() => {
    // Update document title
    document.title = "Kriacard – Global Spending For Less";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Kriacard gives you the freedom to shop, subscribe, and transact globally while spending in your local currency. Safe, secure, and easy global payments with your virtual or physical card."
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Kriacard, global spending, local currency, online shopping, subscription services, Kriapay, Visa, Verve, secure payments, fraud protection, advanced encryption, cross-border transactions, Africa payment, Payment gateway, Paystack, Chippercash, Flutterwave, Kriacard, virtual card"
      );
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "Kriacard – Your Global Spending Power in Local Currency");
    }

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Kriacard gives you the freedom to shop, subscribe, and transact globally while spending in your local currency. Safe, secure, and easy global payments with your virtual or physical card."
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      // Using Cloudinary URL for the image
      ogImage.setAttribute("content", "https://res.cloudinary.com/dhap3isd2/image/upload/v1746235014/Kriapay%20website/kfoe0xvixh5cv5cg7qgr.png");
    }

     // Update Twitter Card metadata
     const twitterCard = document.querySelector("meta[name='twitter:card']");
     if (twitterCard) {
       twitterCard.setAttribute("content", "summary_large_image");
     }
 
     const twitterTitle = document.querySelector("meta[name='twitter:title']");
     if (twitterTitle) {
       twitterTitle.setAttribute("content", "Kriacard – Your Global Spending Power in Local Currency");
     }
 
     const twitterDescription = document.querySelector("meta[name='twitter:description']");
     if (twitterDescription) {
       twitterDescription.setAttribute(
         "content",
         "Kriacard gives you the freedom to shop, subscribe, and transact globally while spending in your local currency. Safe, secure, and easy global payments with your virtual or physical card."
       );
     }
 
     const twitterImage = document.querySelector("meta[name='twitter:image']");
     if (twitterImage) {
       twitterImage.setAttribute("content", "https://res.cloudinary.com/dhap3isd2/image/upload/v1746235014/Kriapay%20website/kfoe0xvixh5cv5cg7qgr.png");
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
    <div className="div-fluid">
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
