import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  return (
    <div className=" bg-[#072a30] overflow-hidden w-full ">
      {/* Text Section */}
      <div className="text-white flex flex-col items-center  pt-[30px]">
        <div className="text-center flex flex-col gap-[40px] pt-[30px] w-[85%] md:w-[70%] lg:w-[75%] 2xl:w-full">
          <h1 className="!text-[27px] md:!text-[30px] lg:!text-[40px] !font-medium tracking-[-1.5px] !leading-[33px] md:!leading-[39px] lg:!leading-[45px] 2xl:!leading-[48px]">
            Kriapay 101 - Everything You
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Need to Know
          </h1>

          <p className="text-[14px] md:text-[16px] lg:text-[18px] z-20 font-normal tracking-[-0.6px] md:tracking-[-0.7px] opacity-90 ">
          Questions pertaining sign-up, deposits, transfers or currency swap? We’ve
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            got all the answers you need.
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
          </p>
        </div>

        <div className="w-full h-[270px] md:h-[327px] lg:h-[347px] flex items-center justify-center relative">
          <img
            src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744195738/Kriapay%20website/wczu6s87mxawm7ctwr90.svg"
            alt="Kriapay company"
            className="rotate-[7deg] w-[85%] md:w-[50%] lg:w-[40%] 2xl:w-[37%] absolute bottom-[-55px] md:bottom-[-70px] lg:bottom-[-85px] 2xl:bottom-[-115px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
