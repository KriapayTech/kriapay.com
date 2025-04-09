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
    step5: "Currency swaps are processed at no cost.",
  },
];


  const Transacting = () =>{
    return(
      <div className="w-full flex justify-center mt-[70px] md:mt-[100px] lg:mt-[150px]">
      <div className="w-[85%] bg-[#072a30] rounded-[20px] flex flex-col items-center text-center mt-[100px] mb-[100px] md:pb-[20px] lg:pb-[50px] 2xl:pb-[20px] relative overflow-hidden">
        <p className="text-[26px] md:text-[33px] lg:text-[39px] 2xl:text-[40px] text-white pt-[60px] tracking-[-3px] font-medium  ">
          Transacting on Kriapay{" "}
        </p>

        <div className="hidden md:block w-[100%] md:h-[600px] lg:h-[590px] 2xl:h-[530px] mt-16 md:mt-12 2xl:mt-4 ">
          <div
            id="currencyCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner overflow-visible ">
              {slidesData.map((slide, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="flex-row flex align-items-center text-left w-full overflow-visible ">
                    <div className="col-md-6 text-white !w-[65%] lg:!w-[51%] 2xl:!w-[49%] pl-[55px] lg:pl-[80px] 2xl:!pl-[120px] pt-[20px]">
                      <h2
                        className={`flex items-center  text-left gap-2 ${
                          index === 0
                            ? "md:!text-[16px] lg:!text-[18px] tracking-[-0.6px] leading-[25px] !font-normal"
                            : "md:!text-[25px] lg:!text-[27px] !font-medium tracking-[-2px] leading-[25px] "
                        }`}
                      >
                        <img
                          src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744198707/Kriapay%20website/qtifdmgqsmyoxsrysdnb.svg"
                          alt="Kriapay coin"
                          className="md:w-[43px] md:h-[43px] lg:w-[50px] lg:h-[50px]"
                        />

                        {index === 0 ? (
                          <>
                            Visit https://kriapay.com and navigate to {" "}
                            <span className="font-semibold ">Signup</span>
                          </>
                        ) : (
                          slide.title
                        )}
                      </h2>
                      <div className="w-full pl-[15px]">
                        {index !== 2 && slide.subTitle && (
                          <h4 className="md:!text-[18px] lg:!text-[21px] tracking-[-1px] leading-[32px] pt-[30px]">
                            {slide.subTitle}
                          </h4>
                        )}

                        <p
                          className={`!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px] ${
                            index === 2 ? "pt-[45px]" : "pt-[20px]"
                          }`}
                        >
                          {slide.step1}
                        </p>

                        <p className="!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px]">
                          {slide.step2}
                        </p>
                        <p className="!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px] ">
                          {slide.step3}
                        </p>
                        <p
                          className={`!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px] ${
                            index === 0 ? "pt-[0px]" : "pt-[40px]"
                          }`}
                        >
                          {slide.step4}
                        </p>

                        <p className="!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px]">
                          {slide.step5}
                        </p>
                        <p className="!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px]">
                          {slide.step6}
                        </p>
                        <p className="!text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px]">
                          {slide.step7}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <img
                className="md:w-[450px] lg:w-[550px] 2xl:w-[600px] 2xl:h-[600px] absolute right-0 bottom-[-200px] opacity-25 "
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg"
                alt="Kriapay landmark"
              />
            </div>
            
            {/* Carousel Controls desktop and tab*/}
            <button
              className="carousel-control-prev relative !hidden md:!block"
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon md:!w-[20px] md:!h-[30px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:left-3 lg:left-10 2xl:left-15 !hidden md:!block"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next relative md:block "
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon md:!w-[20px] md:!h-[30px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:right-3 lg:right-10 2xl:right-15 !hidden md:!block"
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


        {/* Mobile swiper */}
        <div className=" w-[100%] h-[620px] mt-10 md:hidden">
          <div
            id="currencyCarouselmobile"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner overflow-visible ">
              {slidesData.map((slide, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="flex-row flex align-items-center text-left w-full overflow-visible ">
                    <div className="col-md-6 text-white !w-full px-[30px] pt-[10px]">
                      <h2
                        className={`flex items-center  text-left gap-2 ${
                          index === 0
                            ? "!text-[16px] tracking-[-1px] leading-[25px] !font-normal"
                            : "!text-[20px] !font-medium tracking-[-2px] leading-[25px] "
                        }`}
                      >
                        <img
                          src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744198707/Kriapay%20website/qtifdmgqsmyoxsrysdnb.svg"
                          alt="Kriapay coin"
                          className="w-[40px] h-[40px] "
                        />

                        {index === 0 ? (
                          <>
                            Visit https://kriapay.com and navigate to {" "}
                            <span className="font-semibold ">Signup</span>
                          </>
                        ) : (
                          slide.title
                        )}
                      </h2>
                      <div className="w-full pl-[15px]">
                        {index !== 2 && slide.subTitle && (
                          <h4 className="!text-[17px] tracking-[-1.5px] leading-[32px] pt-[30px]">
                            {slide.subTitle}
                          </h4>
                        )}

                        <p
                          className={`!text-[15px] tracking-[-1px] leading-[32px] ${
                            index === 2 ? "pt-[45px]" : "pt-[20px]"
                          }`}
                        >
                          {slide.step1}
                        </p>

                        <p className="!text-[15px] lg:text-[18px] tracking-[-1px] leading-[32px]">
                          {slide.step2}
                        </p>
                        <p className="!text-[15px] lg:text-[18px] tracking-[-1px] leading-[32px] ">
                          {slide.step3}
                        </p>
                        <p
                          className={`!text-[15px] lg:text-[18px] tracking-[-1px] leading-[32px] ${
                            index === 0 ? "pt-[0px]" : "pt-[40px]"
                          }`}
                        >
                          {slide.step4}
                        </p>

                        <p className="!text-[15px] lg:text-[18px] tracking-[-1px] leading-[32px]">
                          {slide.step5}
                        </p>
                        <p className="!text-[15px] lg:text-[18px] tracking-[-1px] leading-[32px]">
                          {slide.step6}
                        </p>
                        <p className="!text-[15px] lg:text-[18px] tracking-[-1px] leading-[32px]">
                          {slide.step7}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <img
                className="w-[300px] h-[400px] absolute right-0 bottom-[-250px] opacity-25 "
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg"
                alt="Kriapay landmark"
              />
            </div>
            {/* Carousel Controls desktop and tab*/}
            <button
              className="carousel-control-prev relative !hidden md:!block"
              type="button"
              data-bs-target="#currencyCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon md:!w-[20px] md:!h-[30px] lg:!w-[22px] lg:!h-[40px] 2xl:!w-[25px] 2xl:!h-[45px] absolute md:left-3 lg:left-10 2xl:left-15 !hidden md:!block"
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
  export default Transacting;