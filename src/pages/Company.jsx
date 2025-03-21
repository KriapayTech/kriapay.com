import React from "react";
import  Companyhero from "../components/Companyhero"
import Navigation from "../components/Navbar";
import Team from "../components/Team";
import Barriers from "../components/Barriers";
import Footer from "../components/Footer";


const Company = () => {
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
