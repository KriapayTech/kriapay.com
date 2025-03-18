import React from "react";
import  Companyhero from "../components/Companyhero"
import Navigation from "../components/Navbar";
import Team from "../components/Team";
import Barriers from "../components/Barriers";


const Company = () => {
  return (
    <div className="div-fluid" >
        <Navigation/>
        <Companyhero/>
        <Team/>
        <Barriers/>


     
    </ div>
  );
};

export default Company;
