import React from "react";
import {Row, Col, Card } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations


const Hero = () => {
  return (
    <div className="text-center py-5 container-fluid" style={{ backgroundColor: "#072a30" }} >
    {/* Centered Content Wrapper */}
    <div className="mx-auto" style={{ maxWidth: "754px"}}>
      <h1 style={{ fontSize: "62px", color: "white", zIndex:'20' }}>
        You Can Pay Less To Send More.
      </h1>
      <p className="mx-auto " style={{ fontSize: "18px", color: "white", maxWidth: "650px", marginTop:'45px', zIndex:'20' }}>
        Send and receive money across Africa with ease, low cost, and competitive exchange rates.
      </p>
    </div>
  
    {/* Wallet Balance Card */}
    <div className="pulsing-wrapper">
    <Card className="mx-auto p-3 text-dark" style={{ width: "520px", height: "280px", marginTop: "90px", padding: "20px 30px", borderRadius: "30px", backgroundColor: "#1b4f56", opacity: 1, overlay:'black',   overflow: "hidden", // Ensures overflow is hidden
 }}>
  <Card.Body>
    <div className="flex dflex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
      {/* First Div */}
      <div
        style={{
          backgroundColor: "#eeeeee",
          borderRadius: "20px",
          width: "110px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "5px",
        }}
      >
        <img
          style={{ width: "30px", height: "30px" }}
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741473178/Nigerian_flag_dbzt9k.svg"
          alt="Nigerian Flag"
        />
        <p className="text-dark" style={{ margin: 0 }}>NGN</p>
      </div>

      {/* Second Div (Dotted Image) */}
      <div style={{ width: "35px", height: "35px", borderRadius: "100px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741474480/3_dotted_line_ofavmw.svg"
          alt="Dotted Icon"
        />
      </div>
    </div>

    {/* Wallet Balance and Abuja Landmark */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "25px" }}>
      {/* Left Section: Wallet Balance */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <h4 style={{ color: "white",marginBottom:'35px' }}>NGN ****</h4>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <p style={{ color: "white", fontSize: "18px", margin: 0 }}>Wallet Balance</p>
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741475472/Hide_eye_g2czes.svg"
            alt="Eye Icon"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>

      {/* Right Section: Abuja Landmark Image */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: 1, marginLeft: "auto" }}>
        <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg"
          alt="Abuja Landmark"
          style={{ width: "260px", height: "210px", marginBottom: "-9px", opacity: 0.5 }}
          />
      </div>
    </div>
  </Card.Body>
</Card></div>
<div  style={{marginTop:'80px'}} className="text-center"  >< p style={{width:'326px', height:'27px',fontSize:'20px',color:'white', marginTop:'60px', margin: "0 auto"}}>Leading Brands, Proudly Partnered:</p></div>

 
  </div>
  
  
  );
};

export default Hero;
