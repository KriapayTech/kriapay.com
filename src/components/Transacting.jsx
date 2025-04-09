import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const slidesData = [
  {
    title: "Making a deposit",
    step1: "• Select the wallet you choose to fund (e.g. NGN, SLE, etc.)",
    step2: "• Enter your desired amount to deposit",
    step3:
      "• Proceed to the payment gateway, and choose from the multiple payment options:",
    step4: "- Debit/Credit card, Bank transfer, Direct debit or USSD",
    step5: "• Complete your payment, and get your funds instantly credited.",
  },
  {
    title: "Transfers",
    step1: "• Select the wallet to debit and enter the amount to send.",
    step2: "• The receiving currency auto-matches the recipient’s currency.",
    note: "- Use the Swap Feature to convert funds if needed.",
    step3: "• Choose the transfer destination: Kriapay wallet or bank account.",
    step4:
      "- If sending to a bank, enter the recipient’s bank name and account number.",
    step5: "• Review, authorize with your transaction PIN, and send instantly!",
  },
  {
    title: "Swapping currencies",
    step1: "• Select the currency to swap from and enter the amount.",
    step2:
      "• Choose the currency to receive, and the system will display the amount you’ll get along with the exchange rate.",
    step3:
      "• Review the details and authorize the swap with your transaction PIN.",
    step4: "• Your funds will be exchanged instantly!",
    step5: "Currency swaps are processed at no cost.",
  },
];

const Transacting = () => {
  return (
    <div className="w-full flex justify-center  mt-[50px] md:mt-[100px] lg:mt-[150px]">
      <div className="w-[85%] bg-[#072a30] rounded-[20px] flex flex-col items-center text-center mt-[100px] mb-[100px] md:pb-[20px] lg:pb-[50px] 2xl:pb-[20px] relative overflow-hidden">
        <p className="text-[26px] md:text-[33px] lg:text-[39px] 2xl:text-[40px] text-white pt-[60px] tracking-[-3px] font-medium  ">
          Transacting on Kriapay{" "}
        </p>

        <div className="hidden md:block w-[100%] md:h-[600px] lg:h-[600px] 2xl:h-[530px] mt-16 md:mt-12 2xl:mt-4 ">
          <div
            id="currencyCarouseltransact"
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
                        className="flex items-center  text-left gap-2 
                          md:!text-[25px] lg:!text-[27px] !font-medium tracking-[-2px] leading-[25px] "
                      >
                        <img
                          src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744198707/Kriapay%20website/qtifdmgqsmyoxsrysdnb.svg"
                          alt="Kriapay coin"
                          className="md:w-[43px] md:h-[43px] lg:w-[50px] lg:h-[50px]"
                        />

                        {slide.title}
                      </h2>
                      <div className="w-full pl-[15px]">

                        <p
                          className="md:!text-[16px] lg:!text-[18px]  tracking-[-0.5px] !leading-[35px] pt-[40px] "
                        >
                          {slide.step1}
                        </p>

                        <p className="md:!text-[16px] lg:!text-[18px]  tracking-[-0.5px] !leading-[35px]">
                          {slide.step2}
                        </p>
                        <p className="md:!text-[16px] lg:!text-[18px] tracking-[-0.5px] !leading-[35px] ">
                          {slide.step3}
                        </p>
                        <p
                         className={`md:text-[16px] lg:text-[18px] tracking-[-0.5px] leading-[32px] pl-[20px] ${
                          index === 2 ? "!pl-[0px] " : "!pl-[40px]"
                        }`}>
                        {slide.step4} 
                        </p>

                        <p  className={`md:!text-[16px] lg:!text-[18px] tracking-[-0.5px] leading-[32px] ${
                            index === 2 ? "pt-[40px] font-medium " : "pt-[0px]"
                          }`}>
                          {slide.step5}
                        </p>
                        <p className="md:!text-[16px] lg:!text-[18px]  tracking-[-0.5px] leading-[35px]">
                          {slide.step6}
                        </p>
                        <p className="md:!text-[16px] lg:!text-[18px]  tracking-[-0.5px] leading-[35px]">
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
              data-bs-target="#currencyCarouseltransact"
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
              data-bs-target="#currencyCarouseltransact"
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
        <div className=" w-[100%] h-[610px] mt-10 md:hidden">
          <div
            id="currencyCarouselmobiletransact"
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
                        className="flex items-center  text-left gap-2 !text-[20px] !font-medium tracking-[-2px] leading-[25px] ">
                        
                        <img
                          src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744198707/Kriapay%20website/qtifdmgqsmyoxsrysdnb.svg"
                          alt="Kriapay coin"
                          className="w-[40px] h-[40px] "
                        />
                        {slide.title}

                       
                      </h2>
                      <div className="w-full pl-[15px]">

                        <p
                          className="!text-[15px] tracking-[-1px] leading-[32px] pt-[20px]"
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
                          className={`!text-[15px] tracking-[-0.5px] leading-[32px] pl-[20px] ${
                            index === 2 ? "!pl-[0px] " : "!pl-[20px]"
                          }`}>
                          {slide.step4} 
                          
                        
                        </p>

                        <p  className={`!text-[15px] tracking-[-0.5px] leading-[32px] ${
                            index === 2 ? "pt-[30px] font-medium " : "pt-[0px]"
                          }`}>
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
              data-bs-target="#currencyCarouselmobiletransact"
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
              data-bs-target="#currencyCarouseltransact"
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
              data-bs-target="#currencyCarouselmobiletransact"
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
              data-bs-target="#currencyCarouselmobiletransact"
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
