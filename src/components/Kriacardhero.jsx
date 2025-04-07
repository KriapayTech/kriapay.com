import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  return (
    // container
    <div className="w-full h-[530px] lg:h-fit relative flex lg:items-center flex-col lg:flex-row justify-between lg:gap-[64px]  overflow-hidden bg-[#072a30] md:pl-[50px] lg:pl-[84px] 2xl:pl-[130px] ">
      {/* Centered Content Wrapper */}
      {/* Text Section */}
      <div className="text-white flex flex-col gap-[25px] md:gap-[40px] pt-[50px] md:pt-[40px] lg:pt-0 justify-center lg:justify-items-normal px-[30px] md:px-0 lg:gap-[60px] lg:pb-[100px] h-[50%] lg:h-fit w-full md:w-[60%] lg:w-[47%]  2xl:w-[45%]">
        <h1 className="!text-[26px] md:!text-[30px] lg:!text-[40px] font-medium z-20 tracking-[-1.5px] !leading-[33px] md:!leading-[39px] lg:!leading-[45px] 2xl:!leading-[48px] "
        >
          Your Global Spending Power in Local Currency
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] z-20 font-normal tracking-[-0.6px] md:tracking-[-0.7px] opacity-90 ">
          Kriacard gives you the freedom to shop, subscribe, and transact
          globally while spending in your local currency.
        </p>
      </div>

      {/* Image Section */}
      <div className="h-[50%] lg:w-[45%] lg:h-[590px] 2xl:h-[610px]">
        <img
          src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742129677/ATM_-_Kriacard_hhywbw.svg"
          alt="Kriapay Kriacard"
          className="absolute w-full h-[87%] md:h-[90%] lg:h-[92%] 2xl:h-[92%] rotate-[34deg] 2xl:rotate-[36deg] right-[-125px] md:right-[-340px] lg:right-[-420px] 2xl:right-[-550px] bottom-[-110px] md:bottom-[-100px] lg:bottom-[-80px] 2xl:bottom-[-70px] "
        />
      </div>
    </div>
  );
};

export default Hero;
