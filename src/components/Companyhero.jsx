import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  return (
    <div className=" bg-[#072a30] overflow-hidden w-full ">
      {/* Text Section */}
      <div className="text-white flex flex-col items-center  pt-[30px]">
        <div className=" text-center flex flex-col gap-[40px] pt-[30px] ">
          <h1 className="!text-[44px] !font-medium tracking-[-1.5px] leading-[48px]  ">
            Redefining Financial Connectivity <br /> for Africa
          </h1>
          <p className="text-[18px] font-normal opacity-90 tracking-[-0.5px] leading-[28px] ">
            We are pioneers of borderless financial access for Africans, with a
            vision to <br /> facilitate financial transactions that are
            frictionless, inclusive, and accessible
            <br /> to all.
          </p>
        </div>

        <div className="w-full h-[320px] flex items-center justify-center relative">
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742306015/Company_coins_ldrnrh.svg"
            alt="Kriapay company"
            className="rotate-[7deg] w-[41%] absolute bottom-[-120px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
