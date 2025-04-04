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
    <div className="flex flex-col items-center justify-center border-2 border-yellow-400 w-full">
      <div className="flex items-center justify-between gap-[20px] mt-[80px] mb-[50px]">
        <div className="flex-1">
          <p className="text-[41px] tracking-[-3px] leading-[150%] font-medium text-[#072A30] pl-[150px] ">
            Send and receive money on your terms - built for you, and Africa.
          </p>
        </div>
        <div className="flex-1 items-center justify-center pr-6">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741820101/SendAndReceive_m9n8zg.svg"
            alt="Hero-coins"
            className="w-[170%] h-[235px]"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="w-[85%] h-[766px] bg-[#072a30] rounded-[20px] overflow-hidden mx-auto "
        >
          <div className="h-[766px]">
              <div className="d-flex justify-content-center align-items-center">
                <h4
                  className="text-center !ml-[327px] !mr-[327px] !mt-[70px] !mb-[60px] !text-[45px] !text-white w-[45%] tracking-[-3px] !font-medium !leading-[45px]"
                >
                  One wallet, multiple currencies.
                </h4>
              </div>

              <div className="flex gap-[20px] pt-4 ">
                <div className="overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742041315/AfricaGlobe_q9y4ub.svg"
                    alt="Abuja Landmark"
                    className="w-[691px] h-[470px] overflow-hidden "
                  />
                </div>
                <div className="flex flex-col gap-[40px] h-fit mt-10">
                  <p className="text-[31px] w-[479px] text-white tracking-[-1.5px] leading-[33px] font-medium "
                  >
                    Say goodbye to currency restrictions.
                  </p>
                  <p className="text-[17px] w-[410px] text-white tracking-[-0.9px] leading-[33px] font-normal opacity-85"
                  >
                    Kriapay’s multi-currency wallet lets you hold, send, and
                    receive money in multiple currencies—all in one place.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center h-[244px] w-full mt-5"
      >
        <p className="text-[45px] w-fit tracking-[-3px] font-medium text-[#072A30] ">
          Affordable transfers, every time.
        </p>
      </div>

      <div className="flex justify-around w-[85%] mt-12 mb-[110px]"
      >
        <div className="mt-10 w-fit h-fit">
          <img className="w-[445px] h-[310px] rotate-[-9deg]"
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741855192/Affordable_transfers_efvv8t.svg"
            alt="Transfer-coins"
          />
        </div>
        <div className="w-[480px] flex flex-col gap-5 h-fit mr-10">
          <p className="text-[28px] text-[#072A30] tracking-[-1.5px] font-medium "
          >
            From the buzzling streets of Lagos, to the breezy shores of
            Freetown,
          </p>
          <p className="text-[23px] text-[#072A30] tracking-[-1.5px] font-normal "
          >
            Kriapay makes sending money across Africa effortless and affordable.
          </p>
        </div>
      </div>

      <div className=" w-[85%] bg-[#072a30] rounded-[20px] fledx flex-col items-center text-center mt-[100px] mb-[100px] "
      >
        <p className="text-[45px] text-white pt-[60px] tracking-[-3px] font-medium  "
        >
          In-app benefits
        </p>


          <div
            className=" w-[100%] h-[530px] mt-4"
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
                      className="row d-flex align-items-center "
                      style={{ textAlign: "left" }}
                    >
                      <div className="col-md-6 text-white">
                        <h2 className="text-[33px] ml-[150px] tracking-[-2px] font-medium ">
                          {slide.title}
                        </h2>
                        <p className="text-[17px] tracking-[-0.9px] mr-[119px] ml-[150px] !mt-[50px] "
                        >
                          {slide.description}
                        </p>
                        <p className="text-[17px] tracking-[-0.9px] mr-[119px] ml-[150px] !mt-[40px]"
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
                          className="ml-[62px] !w-[560px] !h-[380px] mt-[50px] "
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
                  className="carousel-control-prev-icon !w-[25px] !h-[45px] absolute left-15"
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
                  className="carousel-control-next-icon !w-[25px] !h-[45px] absolute right-15"
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
