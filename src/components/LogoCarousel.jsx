import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoCarousel = () => {
  // Carousel settings
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // List of partner logos
  const logos = [
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763208/Kriapay%20website/ur5z6of5fhqbieuo92qu.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763311/Kriapay%20website/hwr9zfaay7gkpgmpremq.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763586/Kriapay%20website/daks0hz8qbexrhgku5gx.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763587/Kriapay%20website/h4enxjfrzxnb0poqgzcz.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763730/Kriapay%20website/im8csspn7usuttc2xlqo.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763852/Kriapay%20website/ahnmlal4epf08uegxmwt.svg",
    "https://res.cloudinary.com/dhap3isd2/image/upload/v1743763910/Kriapay%20website/ngvzew85ywnex7ctjpyg.svg",
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto mt-5">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-around border-2 border-red-500">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-12 border-2 border-green-500 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
