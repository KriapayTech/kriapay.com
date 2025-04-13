import React from "react";

const slidesData = [
  {
    title: "Kriacard is protected with advanced security features",
    description:
      "Encryption, dynamic CW, and fraud detection, all to provide a safe payment experience for you.",

    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043085/Shield_rvfthx.svg",
  },
];

const Fortified = () => {
  return (
    // Container
    <div className="w-full h-fit mt-[100px]  md:mt-[210px]">
      <div className="w-[85%] bg-[#072a30] mx-auto rounded-[20px] md:rounded-[25px] lg:rounded-[30px] flex flex-col items-center">
        <p className="text-[27px] md:text-[33px] lg:text-[39px] 2xl:text-[40px] w-[90%] md:w-[60%] lg:w-[55%] 2xl:w-[40%] text-[white] tracking-[-3px] md:leading-[46px] font-medium pt-[60px] text-center ">
          Fortified for Safety, Designed <br className="" /> for You
        </p>

          <div
            className="w-full lg:h-[530px]  2xl:h-[560px] "
          >
            <div
              id="currencyCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className=" h-fit flex items-center">
                {slidesData.map((slide, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div
                      className="flex w-full flex-col-reverse md:flex-row gap-[50px] md:px-[50px] lg:px-[65px] 2xl:px-[100px] items-center pb-[45px] lg:pb-0 "
                    >
                      <div className="flex flex-col gap-[35px] w-full px-[20px] md:px-0 md:w-[45%] text-white pt-[20px] md:pt-0  ">
                        <h2 className="!text-[23px] md:!text-[25px] lg:!text-[29px] !tracking-[-2px] !leading-[35px]  ">
                          {slide.title}
                        </h2>
                        <p className="!text-[14px] md:!text-[17px] tracking-[-1px] leading-[27px]  "
                        >
                          {slide.description}
                        </p>
                      </div>
                      <div className="w-full md:w-[50%] pt-[50px] lg:pt-[50px] md:pl-[35px] lg:pl-[40px] flex items-center justify-center ">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-[90%] h-[240px] md:w-[550px] md:h-[340px] lg:h-[340px] 2xl:h-[380px] "
                        />
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
  );
};
export default Fortified;
