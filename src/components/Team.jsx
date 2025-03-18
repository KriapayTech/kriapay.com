import React from "react";

const slidesData = [
    {
      title: "Onyejife Ugochukwu",
      description:
        "Founder & Chief Executive Officer (CEO)",
      
        image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309741/vecteezy_a-man-in-a-suit-is-holding-something-up_57229250_zndyuu.png",
    },
    {
      title: "Atunwa Vincent",
      description:
        "Co-Founder & Director",
  
      image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309673/vecteezy_a-smiling-black-man-in-a-green-polo-shirt_57225216_2_uc4z9g.png",
    },
  
    
    {
      title: "Nnawuihe Johnkennedy",
      description:
        " Chief Financial Officer (CFO) ",
  
      image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309733/vecteezy_a-man-in-a-suit-holding-a-tablet-computer_57229731_1_x3kgf6.png",
    },

    {
        title: "Chiboka Emmanuel",
        description:
          " Chief Technology Officer (CTO) ",
    
        image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309671/vecteezy_a-smiling-black-man-in-a-suit-holding-a-folder_57230020_amhk7j.png",
      },

      {
        title: "Disu Deborah",
        description:
          " Head of Marketing & Growth ",
    
        image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309716/vecteezy_a-smiling-african-american-woman-in-a-red-suit_57225200_gsixty.png",
      },

      {
        title: " Udegbunam Kosisochukwu ",
        description:
          "Head of Operations",
    
        image: "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309671/vecteezy_a-smiling-black-man-in-a-blue-shirt_57230023_ycrby3.png",
      },
  
  ];

  const Team = () =>{
    return(
        <div
  style={{
    height: "605px",
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
   Meet The Team
  </p>

  <div>
  <div className="container mb-5" style={{height:'460px'}}>
      <div id="currencyCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row d-flex align-items-center " style={{ textAlign: 'left' }}>
                <div className="col-md-6 text-white">
                  <h2 style={{fontSize:'29px', marginLeft:'150px'}}>{slide.title}</h2>
                  <p style={{fontSize:'16px',  marginTop:'30px', marginLeft:'150px'}}>{slide.description}</p>
                  {/* <p style={{fontSize:'17px', marginRight:'119px', marginTop:'20px', marginLeft:'150px'}}>{slide.descriptionbelow}</p> */}

                </div>
                <div className="col-md-6">
                  <img src={slide.image} alt={slide.title} style={{marginLeft:'62px',marginTop:'50px',marginBottom:'44px', width:'514px', height:'349px', objectFit: "contain"}} className="img-fluid" />
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
  export default Team;