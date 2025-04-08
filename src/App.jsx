import React from "react";
import LandingPage from "./pages/Landingpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Kriacard from "./pages/Kriacard";
import Company from "./pages/Company";
import Askkriapay from "./pages/Ask.jsx"

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { SpeedInsights } from "@vercel/speed-insights/next";




const App = () => {
  return (
    <Router>
    <div className="div-fluid">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kriacard" element={<Kriacard/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/ask" element={<Askkriapay/>} />
        <SpeedInsights/>



      </Routes>
    </div>
  </Router>
  );
};

export default App;
