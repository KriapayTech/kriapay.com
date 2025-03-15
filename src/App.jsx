import React from "react";
import Navigation from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";



const App = () => {
  return (
    <>
    <div className="div-fluid">

      <Navigation />
      <LandingPage />
      {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
