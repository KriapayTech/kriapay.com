import React from "react";

const slidesData = [
  {
    title: "Making a deposit",
    step1: "Select the wallet you choose to fund (e.g. NGN, SLE, etc.)",
    step2: "Enter your desired amount to deposit",
    step3: "Proceed to the payment gateway, and choose from the multiple payment options:",
    step4: [
      "Debit/Credit card",
      "Bank transfer",
      "Direct debit",
      "USSD"
    ],
    step5: "Complete your payment, and get your funds instantly credited."
  },
  {
    title: "Transfers",
    step1: "Select the wallet to debit and enter the amount to send.",
    step2: "The receiving currency auto-matches the recipient’s currency.",
    note: "Use the Swap Feature to convert funds if needed.",
    step3: "Choose the transfer destination: Kriapay wallet or bank account.",
    step4: "If sending to a bank, enter the recipient’s bank name and account number.",
    step5: "Review, authorize with your transaction PIN, and send instantly!"
  },
  {
    title: "Swapping currencies",
    step1: "Select the currency to swap from and enter the amount.",
    step2: "Choose the currency to receive, and the system will display the amount you’ll get along with the exchange rate.",
    step3: "Review the details and authorize the swap with your transaction PIN.",
    step4: "Your funds will be exchanged instantly!",
    step5: "Currency swaps are processed at no cost."
  }
];


  const Transacting = () =>{
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
Transacting on Kriapay  </p>

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
  export default Transacting;