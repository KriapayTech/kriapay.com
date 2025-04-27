import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Ticker = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Mark that we're now on the client-side
  }, []);

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const logos = [
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763208/Kriapay%20website/ur5z6of5fhqbieuo92qu.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763311/Kriapay%20website/hwr9zfaay7gkpgmpremq.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763586/Kriapay%20website/daks0hz8qbexrhgku5gx.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763587/Kriapay%20website/h4enxjfrzxnb0poqgzcz.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763730/Kriapay%20website/im8csspn7usuttc2xlqo.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763852/Kriapay%20website/ahnmlal4epf08uegxmwt.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763910/Kriapay%20website/ngvzew85ywnex7ctjpyg.svg",
  ];

  if (!isClient) return null; // Don't render anything on server

  return (
    <div className="text-center pt-[50px] md:pt-[60px] lg:pt-[80px] pb-[30px] md:pb-[40px] lg:pb-[40px] 2xl:pb-[50px] flex flex-col items-center justify-center bg-[#072a30]">
      <p className="w-fit h-fit text-[16px] md:text-[18px] 2xl:text-[20px] tracking-[-0.5px] text-white mt-[60px] mx-0 my-auto">
        Leading Brands, Proudly Partnered:
      </p>
      <div className="w-full max-w-[300px] md:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1200px] mx-auto mt-5 overflow-hidden">
        <Slider {...settings}>
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex !justify-center !items-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={
                  index === 3
                    ? "w-[120px] h-[35px] md:w-[140px] md:h-[45px] lg:w-[160px] lg:h-[50px] 2xl:w-[170px] 2xl:h-[60px] object-contain cursor-pointer"
                    : "w-[120px] h-[45px] md:w-[130px] md:h-[45px] 2xl:w-[150px] 2xl:h-[55px] object-contain cursor-pointer"
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ticker;
