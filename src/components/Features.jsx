import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const slidesData = [
  {
    title: "Effortless Currency Swap",
    description:
      "Convert Naira to Leones, Cedis to Rands, or any other African currency with ease—no hidden fees, just great rates at your fingertips.",
    descriptionbelow: "Swaps are processed instantly.",

    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1741875528/CurrencySwap_g9dbtt.svg",
  },
  {
    title: "Security You Can Trust",
    description: "Your money’s safety is our top priority.",
    descriptionbelow:
      "Our strict KYC process, keeps fraudsters out, so you can send and receive funds with peace of mind.",

    image:
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043085/Shield_rvfthx.svg",
  },

  {
    title: "Seamless & Time-Saving Transactions",
    description:
      " Time is money, and with Kriapay, you don’t have to waste either! ",
    descriptionbelow:
      "     Our intuitive platform ensures that deposits and transfers happen in seconds, so you can focus on what truly matters.",

    image: 
      "https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043045/HourGlass_grwzbn.svg",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-[20px] px-[15px] md:px-10 lg:px-0 mt-[80px] mb-[50px]">
        <div className="flex-1">
          <p className="text-[29px] md:text-[36px] lg:text-[41px] tracking-[-3px] leading-[150%] font-medium text-[#072A30] md:pl-[40px] lg:pl-[100px] 2xl:pl-[150px] ">
            Send and receive money on your terms - built for you, and Africa.
          </p>
        </div>
        <div className="flex-1 items-center justify-center lg:pr-6">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741820101/SendAndReceive_m9n8zg.svg"
            alt="Kriapay coins"
            className="w-[110%] h-[156px] md:w-[145%] md:h-[190px] lg:w-[170%] lg:h-[235px]"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="w-[85%] h-[830px] md:h-[950px] lg:h-[1100px] 2xl:h-[766px] bg-[#072a30] rounded-[20px] overflow-hidden mx-auto "
        >
          <div className="h-[766px]">
              <div className="d-flex justify-content-center align-items-center">
                <h4
                  className=" md:w-[70%] lg:w-[50%] text-center 2xl:!ml-[327px] 2xl:!mr-[327px] !mt-[50px] !mb-[35px] md:!mt-[50px] 2xl:!mt-[70px] 2xl:!mb-[60px] !text-[30px] md:!text-[39px] lg:!text-[45px] !text-white 2xl:w-[45%] tracking-[-3px] !font-medium !leading-[45px]"
                >
                  One wallet, multiple currencies.
                </h4>
              </div>

              <div className="flex flex-col-reverse md:flex-col 2xl:flex-row lg:gap-[20px] pt-4">
                <div className="overflow-hidden flex justify-center 2xl:block">
                  <img
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742041315/AfricaGlobe_q9y4ub.svg"
                    alt="Abuja Landmark"
                    className="w-[375px] h-[270px] md:w-[573px] md:h-[390px] lg:w-[580px] lg:h-[480px] 2xl:w-[691px] 2xl:h-[470px] overflow-hidden "
                  />
                </div>
                <div className="flex flex-col mb-10 md:mb-0 md:py-5 2xl:py-0 gap-[40px] h-fit md:mt-14">
                  <p className="text-[23px] md:text-[31px] px-[30px] md:px-14 2xl:pl-0 md:w-[80%] lg:w-[479px] text-white tracking-[-1.5px] leading-[33px] font-medium "
                  >
                    Say goodbye to currency restrictions.
                  </p>
                  <p className="text-[17px] px-[30px] md:px-14 2xl:pl-0 md:w-[80%] lg:w-[80%] 2xl:w-[410px] text-white tracking-[-1px] leading-[33px] font-normal opacity-85"
                  >
                    Kriapay’s multi-currency wallet lets you hold, send, and
                    receive money in multiple currencies—all in one place.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center mt-[100px] mb-5 md:mb-0 md:h-[230px] w-full md:mt-5"
      >
        <p className="text-[30px] px-[50px] md:text-[40px] md:w-[60%] lg:w-[50%] lg:text-[45px] 2xl:w-[40%] tracking-[-3px] leading-[32px] md:leading-[45px] font-medium text-[#072A30] ">
          Affordable transfers, everytime.
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-around w-[85%] mt-12 md:mt-3 2xl:mt-10 mb-[20px] md:mb-[110px] "
      >
        <div className="mb-14 md:mb-0 md:mt-10 w-fit h-fit flex justify-center items-center md:block ">
          <img className="w-[283px] h-[200px] md:w-[370px] md:h-[260px] lg:w-[440px] lg:h-[300px] rotate-[-9deg]"
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741855192/Affordable_transfers_efvv8t.svg"
            alt="Kriapay-transfer-coins"
          />
        </div>
        <div className="w-[100%] mt-5 2xl:!mt-0  md:mt-0 md:w-[480px] px-[25px] flex flex-col gap-[30px] md:gap-5 h-fit md:mx-3 lg:mr-10">
          <p className=" text-[22px] md:text-[25px] lg:text-[28px] text-[#072A30] tracking-[-1.5px] font-medium "
          >
            From the buzzling streets of Lagos, to the breezy shores of
            Freetown,
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] text-[#072A30] tracking-[-1px] md:tracking-[-1.5px] font-normal "
          >
            Kriapay makes sending money across Africa effortless and affordable.
          </p>
        </div>
      </div>

      <div className=" w-[85%] bg-[#072a30] rounded-[20px] fledx flex-col items-center text-center mt-[100px] mb-[100px] "
      >
        <p className="text-[30px] md:text-[40px] 2xl:text-[45px] text-white pt-[60px] tracking-[-3px] font-medium  "
        >
          In-app benefits
        </p>


          <div
            className="hidden md:block w-[100%] md:h-[450px] lg:h-[530px] mt-16 md:mt-12 2xl:mt-4"
          >
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
                      className="row md:d-flex align-items-center "
                      style={{ textAlign: "left" }}
                    >
                      <div className="col-md-6 text-white">
                        <h2 className="text-[24] md:text-[29px] 2xl:text-[33px] md:ml-[50px] lg:ml-[100px] 2xl:ml-[150px] tracking-[-2px] font-medium ">
                          {slide.title}
                        </h2>
                        <p className="text-[16px] md:text-[17px] tracking-[-0.9px] md:mr-[50px] 2xl:mr-[119px] md:ml-[50px] lg:ml-[100px] 2xl:ml-[150px] !mt-[50px] "
                        >
                          {slide.description}
                        </p>
                        <p className="txt-[16px] md:text-[17px] tracking-[-0.9px] lg:mr-[50px] 2xl:mr-[119px] md:ml-[50px] lg:ml-[100px] 2xl:ml-[150px] !mt-[40px]"
                        >
                          {slide.descriptionbelow}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          style={{
                          }}
                          className="2xl:ml-[62px] md:!w-[450px] md:!h-[320px] lg:!w-[490px] lg:!h-[345px] 2xl:!w-[560px] 2xl:!h-[380px] mt-[50px] "
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
                  className="carousel-control-prev-icon lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:left-3 lg:left-10 2xl:left-15"
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
                  className="carousel-control-next-icon lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:right-3 lg:right-10 2xl:right-15"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
        </div>

        {/* Mobile swiper */}
        <div
            className=" w-[100%] h-[650px] mt-10 md:hidden"
          >
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
                    <div
                      className="row md:d-flex align-items-center text-left "
                    >
                       <div className="col-md-6  flex justify-center mb-16">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          style={{
                          }}
                          className="!w-[310px] !h-[210px] 2xl:ml-[62px] md:!w-[450px] md:!h-[320px] lg:!w-[490px] lg:!h-[345px] 2xl:!w-[560px] 2xl:!h-[380px] mt-[50px] "
                        />
                      </div>
                      <div className="col-md-6 text-white">
                        <h2 className="text-[24] mx-[30px] md:text-[29px] 2xl:text-[33px] md:ml-[50px] lg:ml-[100px] 2xl:ml-[150px] tracking-[-2px] font-medium ">
                          {slide.title}
                        </h2>
                        <p className="text-[16px] mx-[30px] md:text-[17px] tracking-[-0.9px] md:mr-[50px] 2xl:mr-[119px] md:ml-[50px] lg:ml-[100px] 2xl:ml-[150px] !mt-[50px] "
                        >
                          {slide.description}
                        </p>
                        <p className="text-[16px] mx-[30px] md:text-[17px] tracking-[-0.9px] lg:mr-[50px] 2xl:mr-[119px] md:ml-[50px] lg:ml-[100px] 2xl:ml-[150px] !mt-[40px]"
                        >
                          {slide.descriptionbelow}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel Controls desktop and tab*/}
              <button
                className="carousel-control-prev relative !hidden lg:!block "
                type="button"
                data-bs-target="#currencyCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon md:!w-[20px] md:!h-[20px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:left-[20px]lg:left-10 2xl:left-15 !hidden lg:!block"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next relative !hidden lg:!block "
                type="button"
                data-bs-target="#currencyCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon !hidden lg:!block  md:!w-[20px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:right-3 lg:right-10 2xl:right-15 "
                  aria-hidden="true"
                ></span>
              </button>

              {/* Carousel controls mobile */}
              <button
              className="carousel-control-prev relative lg:!hidden"
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
              className="carousel-control-next relative lg:!hidden"
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

export default Features;
