import React, { useEffect } from "react";
import ConditionsHero from "../components/ConditionsHero";
import Navigation from "../components/Navbar";
import ConditionsBody from "../components/ConditionsBody";
import Footerterms from "../components/Footerterms";

const Termsandconditions = () => {
  useEffect(() => {
    document.title = "Terms and Conditions – Kriapay";

    const description =
      "Review the terms and conditions guiding your use of Kriapay's services. We ensure transparency and clarity in how we deliver secure cross-border financial access.";
    const image =
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1746275515/Kriapay%20website/oypx0gijhnoqqe2xmauq.png";

    // Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", "Terms and Conditions – Kriapay");
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
      twitterTitle.setAttribute("content", "Terms and Conditions – Kriapay");
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
      <ConditionsHero />
      <ConditionsBody />
      <Footerterms />
    </div>
  );
};

export default Termsandconditions;
