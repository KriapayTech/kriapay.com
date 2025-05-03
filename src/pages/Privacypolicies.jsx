import React, { useEffect } from "react";
import Privacyhero from "../components/Privacyhero";
import PrivacyBody from "../components/PrivacyBody";
import Navigation from "../components/Navbar";
import Footerterms from "../components/Footerterms";

const Privacypolicies = () => {
  useEffect(() => {
    document.title = "Privacy Policies – Kriapay";

    const description = "Read Kriapay's privacy policies to understand how we collect, use, and protect your personal data. Your privacy and trust are important to us.";
    const image = "https://res.cloudinary.com/dhap3isd2/image/upload/v1746275193/Kriapay%20website/qc6b0qw6mpztwf6zssr5.png";

    // Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Open Graph (OG) Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "Privacy Policies | Kriapay");
    }

    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    // Twitter Tags
    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Privacy Policies - Kriapay");
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']");
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute("content", image);
    }
  }, []);

  return (
    <div className="div-fluid">
      <Navigation />
      <Privacyhero />
      <PrivacyBody />
      <Footerterms />
    </div>
  );
};

export default Privacypolicies;
