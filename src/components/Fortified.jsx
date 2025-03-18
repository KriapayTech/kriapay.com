import React from "react";


const slidesData = [
  
    {
      title: "Kriacard is Protected with Advanced Security Features",
      description:
        "Encryption , Dynamic CW and Fraud Detection all to provide a safe payment experience for you",
  
      image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043085/Shield_rvfthx.svg",
    },

  
  ];

  const Fortified = () => {
    return(
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
      fontSize: "43px",
      color: "white",
      marginTop:'60px',
    }}
  >
    Fortified for Safety, Designed for <br/> You
  </p>

  <div>
  <div className="container my-5" style={{height:'580px', borderTop:'solid 1px white'}}>
      <div id="currencyCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row d-flex align-items-center " style={{ textAlign: 'left' }}>
                <div className="col-md-6 text-white">
                  <h2 style={{fontSize:'31px', marginLeft:'150px'}}>{slide.title}</h2>
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
      
      </div>
    </div>
  </div>
</div>
    )
  }
  export default Fortified