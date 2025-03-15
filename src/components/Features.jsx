import React from "react";
import {  Row, Col, Card } from "react-bootstrap";

const slidesData = [
  {
    title: "Effortless Currency Swap",
    description:
      "Convert Naira to Leones, Cedis to Rands, or any other African currency with ease—no hidden fees, just great rates at your fingertips.",
    descriptionbelow:"Swaps are processed instantly.",
    
      image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1741875528/CurrencySwap_g9dbtt.svg",
  },
  {
    title: "Security You Can Trust",
    description:
      "Your money’s safety is our top priority.",
      descriptionbelow:"Our strict KYC process, keeps fraudsters out, so you can send and receive funds with peace of mind.",

    image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043085/Shield_rvfthx.svg",
  },

  
  {
    title: "Seamless & Time-Saving Transactions",
    description:
      " Time is money, and with Kriapay, you don’t have to waste either! ",
      descriptionbelow:"     Our intuitive platform ensures that deposits and transfers happen in seconds, so you can focus on what truly matters.",

    image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043045/HourGlass_grwzbn.svg",
  },

];

const Features = () => {
  return (
    <div className="py-5 container-fluid">
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
  <div style={{ flex: 1 }}>
    <p style={{ fontSize: "41px", color:'#072A30', width:'1fr' ,paddingBottom:'150px',paddingTop:'150px',paddingLeft:'150px' }}>Send and receive money on your terms - built for you, and Africa.</p>
  </div>
  <div style={{ flex: 1 }}>
    <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741820101/SendAndReceive_m9n8zg.svg" alt="" style={{ Width: "172%", height: "200px", marginLeft:'161px',marginRight:'140px',marginBottom:'39px' }} />
  </div>
</div>

      <div style={{}}>
        <div style={{margin:'95px', backgroundColor:'#072a30',height:'774px', borderRadius:'20px', overflow: "hidden"}} >
          <div className="p-4">
            <div>
            <div className="d-flex justify-content-center align-items-center ">
  <h4 className="text-center"style={{marginLeft:'327px',marginRight:'327px', marginTop:'70px', marginBottom:'60px', fontSize:'45px', color:'white', width:'45%'}}>One Wallet, Multiple Currencies</h4>
</div>

<div style={{ display: "flex", gap: "20px" }}>
  <div style={{overflow: "hidden"}}>
    <img
      src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742041315/AfricaGlobe_q9y4ub.svg"
      alt="Abuja Landmark"
      style={{ width: "590px", height: "460px",   overflow:'hidden'}}
    />
  </div>
  <div>
    <p style={{ fontSize: "33px", width: "479px", color: "white" }}>
      Say goodbye to currency restrictions.
    </p>
    <p style={{ fontSize: "17px", width: "410px", color: "white" }}>
    Kriapay’s multi-currency wallet lets you hold, send, and receive money in multiple currencies—all in one place.
    </p>
  </div>
</div>

              
            </div>
          </div>
        </div>
        
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "244px" }}>
  <p style={{ width: "50%", fontSize: "45px" , height:'94px'}}>
    Affordable transfers,<br/> every time.
  </p>
</div>

<div
 style={{
  display: "flex",
  justifyContent: "center",
  border: "1px solid #c6d3d5",
  borderBottom: "none", // Removes bottom border
  borderRadius: "10px 10px 0 0", // Adds border-radius only to the top corners
  width: "1140px",
  textAlign: "center",
  margin: "0 auto", // Centers the div horizontally
}}

>
  <div>
    <img
      src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741855192/Affordable_transfers_efvv8t.svg"
      alt=""
      style={{ marginRight: "248px", marginTop: "81px", marginBottom: "49px" }}
    />
  </div>
  <div>
    <p
      style={{
        width: "475px",
        height: "60px",
        color: "#072A30",
        fontSize: "26px",
        marginTop: "50px",
      }}
    >
      From the buzzling streets of Lagos, to the breezy shores of Freetown,
    </p>
    <p
      style={{
        width: "475px",
        height: "50px",
        color: "#072A30",
        fontSize: "22px",
        marginTop: "70px",
      }}
    >
      From the buzzling streets of Lagos, to the breezy shores of Freetown,
    </p>
  </div>
</div>


<div
  style={{
    height: "744px",
    backgroundColor: "#072a30",
    width: "1140px",
    margin: "0 auto",
    marginTop: "210px",
    borderRadius: "20px",
    display: "flex", // Enables flexbox
    flexDirection: "column", // Aligns children in a column
    alignItems: "center", // Centers items horizontally
    textAlign: "center" // Ensures text inside is centered
  }}
>
  <p
    style={{
      fontSize: "45px",
      color: "white",
      marginTop:'60px',
    }}
  >
    In-app benefits
  </p>

  <div>
  <div className="container my-5" style={{height:'580px', borderTop:'solid 1px white'}}>
      <div id="currencyCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row d-flex align-items-center " style={{ textAlign: 'left' }}>
                <div className="col-md-6 text-white">
                  <h2 style={{fontSize:'33px', marginLeft:'150px'}}>{slide.title}</h2>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'50px', marginLeft:'150px'}}>{slide.description}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'20px', marginLeft:'150px'}}>{slide.descriptionbelow}</p>

                </div>
                <div className="col-md-6">
                  <img src={slide.image} alt={slide.title} style={{marginLeft:'62px',marginTop:'50px',marginBottom:'44px', width:'574px', height:'391px'}} className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#currencyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#currencyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Features;
