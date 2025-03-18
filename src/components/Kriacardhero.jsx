import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  return (
    <div
      className="position-relative py-5 container-fluid"
      style={{ backgroundColor: "#072a30", height: "617px", overflow: "hidden" }}
    >
      {/* Centered Content Wrapper */}
      <Container className="d-flex flex-column align-items-start justify-content-start h-100 position-relative">
        {/* Text Section */}
        <Col md={6} className="text-white mt-5">
          <h1 style={{ fontSize: "40px", zIndex: "20", marginBottom: "70px" , marginTop:'50px'}}>
            Your Global Spending Power in Local Currency
          </h1>
          <p style={{ fontSize: "19px", maxWidth: "650px", zIndex: "20" }}>
            Kriacard gives you the freedom to shop, subscribe, and transact globally while spending in your local currency.
          </p>
        </Col>
      </Container>

      {/* Image Section */}
      <img
        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742129677/ATM_-_Kriacard_hhywbw.svg"
        alt="Payment Illustration"
        className="position-absolute"
        style={{
          transform: "rotate(35deg)",
          width: "720px",
          height: "540px",
          right: "-130px",
          marginLeft:'300px',
          bottom: "-50px",
          maxWidth: "100%",
        }}
      />
    </div>
  );
};

export default Hero;
