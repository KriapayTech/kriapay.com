import React from "react";

const slidesData = [
  {
    title: "Signup Requirements",
    step1: "Visit https://kriapay.com and navigate to Signup",
    step2: "Full name",
    step3: "Date of birth",
    step4:"Email address",
    step5: "Phone number",
    step6: "New password",
    step7: "New transaction PIN"


  },
  {
    title: "KYC Verification",
    step1: "Government issued ID (National ID, Passport, Driver’s license, etc.) Tier 1",
    step2: "Proof of address (Utility bill or bank statement) Tier 2",
    step3: "Proof of funds Tier 3",
    step4: "These documents are verified against the information provided during signup.",
  },
  {
    title: "Protecting Your Account & Transactions",
    step1: "Use a strong, unique password to keep your account secure.",
    step2: "Create a secure transaction PIN for quick and safe payments during signup",
    step3: "If you forget your password or PIN, you can easily reset them in-app with a few simple steps.",
    step4: "Never share your password or PIN. Always reset them immediately if you suspect any unauthorized access.",
  }
];


  const Create = () =>{
    return(
        <div
  style={{
    height: "705px",
    backgroundColor: "#072a30",
    width: "1140px",
    margin: "0 auto",
    marginTop: "210px",
    borderRadius: "20px",
    display: "flex", // Enables flexbox
    flexDirection: "column", // Aligns children in a column
    alignItems: "center", // Centers items horizontally
    textAlign: "center", // Ensures text inside is centered
    position: 'relative',
  }}
>
  <p
    style={{
      fontSize: "45px",
      color: "white",
      marginTop:'60px',
      marginBottom:'60px'
    }}
  >
Creating an account </p>

  <div>
  <div className="container mb-5" style={{height:'560px', overflow:''}}>
      <div id="currencyCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row d-flex align-items-center " style={{ textAlign: 'left' }}>
                <div className="col-md-6 text-white">
                  <h2 style={{fontSize:'29px', marginLeft:'150px'}}>{slide.title}</h2>
                  <p style={{fontSize:'16px',  marginTop:'30px', marginLeft:'150px'}}>{slide.step1}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'5px', marginLeft:'150px'}}>{slide.step2}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'5px', marginLeft:'150px'}}>{slide.step3}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'5px', marginLeft:'150px'}}>{slide.step4}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'5px', marginLeft:'150px'}}>{slide.step5}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'5px', marginLeft:'150px'}}>{slide.step6}</p>
                  <p style={{fontSize:'17px', marginRight:'119px', marginTop:'5px', marginLeft:'150px'}}>{slide.step7}</p>



                </div>
                <div className="col-md-6" style={{overflow:'hidden',position: 'relative',}}>
                  <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg" alt={slide.title} style={{marginLeft:'62px',marginTop:'50px',marginBottom:'-84px', width:'514px', height:'549px', objectFit: "contain",overflow:'hidden',opacity:0.5}} className="img-fluid" />
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
     )
  }
  export default Create;