import React from "react";

const slidesData = [
  {
    title: "Onyejife Ugochukwu",
    description: "Founder & Chief Executive Officer (CEO)",
    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309741/vecteezy_a-man-in-a-suit-is-holding-something-up_57229250_zndyuu.png",
    socials: {
      linkedin: "https://linkedin.com/in/onyejifeugochukwu",
      twitter: "https://twitter.com/ceoonyejife",
      github: "", // Optional
    },
  },
  {
    title: "Atunwa Vincent",
    description: "Co-Founder & Director",
    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309673/vecteezy_a-smiling-black-man-in-a-green-polo-shirt_57225216_2_uc4z9g.png",
    socials: {
      linkedin: "https://linkedin.com/in/atunwavincent",
      twitter: "https://twitter.com/atunwa_vincent",
      github: "", // Optional
    },
  },
  {
    title: "Nnawuihe Johnkennedy",
    description: "Chief Financial Officer (CFO)",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1744132418/Kriapay%20website/b3aqrhbpdqk3skpqygqm.png",
    socials: {
      linkedin: "https://linkedin.com/in/johnkennedycfo",
      twitter: "https://twitter.com/johnkennedy_fin",
      github: "", // Optional
    },
  },
  {
    title: "Chiboka Emmanuel",
    description: "Chief Technology Officer (CTO)",
    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309671/vecteezy_a-smiling-black-man-in-a-suit-holding-a-folder_57230020_amhk7j.png",
    socials: {
      linkedin: "https://linkedin.com/in/chibokaemmanuel",
      twitter: "https://twitter.com/chiboka_dev",
      github: "https://github.com/chibokaemmanuel",
    },
  },
  {
    title: "Udegbunam Kosisochukwu",
    description: "Head of Operations",
    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742309671/vecteezy_a-smiling-black-man-in-a-blue-shirt_57230023_ycrby3.png",
    socials: {
      linkedin: "https://linkedin.com/in/kosisochukwu-udegbunam",
      twitter: "https://twitter.com/kosi_ops",
      github: "",
    },
  },
];

const Team = () => {
  return (
    <div className="w-full flex justify-center mt-[70px] md:mt-[100px] lg:mt-[150px]">
      <div className=" w-[85%] bg-[#072a30] rounded-[25px] lg:rounded-[30px] flex flex-col items-center text-center mt-[100px] mb-[100px] md:pb-[20px] lg:pb-[10px] 2xl:pb-[20px] ">
        <p className="text-[30px] md:text-[33px] lg:text-[39px] 2xl:text-[40px] text-white pt-[60px] tracking-[-3px] font-medium  ">
          Meet the team
        </p>
        <div className="hidden md:block w-[100%] md:h-[450px] lg:h-[530px] mt-16 md:mt-12 2xl:mt-4">
          <div
            id="currencyCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {slidesData.map((slide, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div
                    className="row md:d-flex align-items-center"
                    style={{ textAlign: "left" }}
                  >
                    <div className="col-md-6 text-white  flex flex-col items-start justify-center !pl-[100px]  2xl:!pl-[240px] pt-[40px] ">
                      <h2 className="text-[24] md:!text-[27px] lg:!text-[29px] tracking-[-2px] font-medium ">
                        {slide.title}
                      </h2>
                      <p className="!text-[16px] lg:!text-[18px] tracking-[-0.9px]  !mt-[40px] ">
                        {slide.description}
                      </p>
                    </div>

                    <div className="col-md-6  w-[50%] md:h-[400px] lg:h-[500px]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        style={{}}
                        className="md:w-[88%] lg:w-[87%] md:h-[410px] lg:h-[400px] 2xl:h-[410px] object-contain "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Controls */}
            <button
              className="carousel-control-prev relative"
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon md:!w-[21px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:left-3 lg:left-10 2xl:left-15"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next relative"
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon md:!w-[21px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:right-3 lg:right-10 2xl:right-15"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile swiper */}
        <div className=" w-[100%] h-[500px] mt-10 md:hidden">
          <div
            id="currencyCarouselmobile"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {slidesData.map((slide, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row md:d-flex align-items-center text-left ">
                    <div className="col-md-6  flex justify-center mb-16  w-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        style={{}}
                        className="!w-[310px] !h-[240px] object-contain "
                      />
                    </div>
                    <div className="col-md-6 text-white pt-[30px]">
                      <h2 className="!text-[23px] mx-[30px] tracking-[-2px] font-medium ">
                        {slide.title}
                      </h2>
                      <p className="text-[15px] mx-[30px]  tracking-[-0.9px]  !mt-[20px] ">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Controls desktop and tab*/}
            <button
              className="carousel-control-prev relative !hidden md:block"
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon md:!w-[20px] md:!h-[30px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:left-3 lg:left-10 2xl:left-15 !hidden md:block"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next relative md:block border-2"
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon md:!w-[20px] md:!h-[30px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:right-3 lg:right-10 2xl:right-15 !hidden md:block"
                aria-hidden="true"
              ></span>
            </button>

            {/* Carousel controls mobile */}
            <button
              className="carousel-control-prev relative md:!hidden"
              type="button"
              data-bs-target="#currencyCarouselmobile"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon  !w-[20px] !h-[30px] absolute left-3 md:!hidden"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next relative md:!hidden"
              type="button"
              data-bs-target="#currencyCarouselmobile"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon !w-[20px] !h-[30px]  absolute right-3 md:!hidden"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
