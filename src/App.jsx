import React from "react";
import LandingPage from "./pages/Landingpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Kriacard from "./pages/Kriacard";
import Company from "./pages/Company";
import Askkriapay from "./pages/Ask.jsx";
import Termsandconditions from "./pages/Termsandconditions.jsx";
import Privacypolicies from "./pages/Privacypolicies.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div className="div-fluid">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kriacard" element={<Kriacard/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/ask" element={<Askkriapay/>} />
        <Route path="/terms-and-conditions" element={<Termsandconditions/>} />
        <Route path="/privacy-policies" element={<Privacypolicies/>} />
      </Routes>
    </div>
  );
};

export default App;
