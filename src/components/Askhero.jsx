import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center text-center container-fluid"
      style={{ backgroundColor: "#072a30", height: "655px", overflow: "hidden" }}
    >
      {/* Text Section */}
      <Container className="text-white d-flex flex-column align-items-center">
        <div className="mx-auto">
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "bold",
              marginBottom: "20px",
              Width: "700px",
              marginTop:'200px'
            }}
          >
           Kriapay 101 – Everything You <br/> Need to Know
          </h1>
          <p style={{ fontSize: "17px", Width: "600px", marginTop:'50px' }}>
          Questions pertaining sign-up, deposits, transfers or currency swap? We’ve <br/> got all the answers you need.          </p>

          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742306015/Company_coins_ldrnrh.svg"
            alt="Payment Illustration"
            className="img-fluid mt-4"
            style={{
              transform: "rotate(7deg)",
              width: "100%",
              maxWidth: "640px",
              height: "430px",
              marginTop: "160px",
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
