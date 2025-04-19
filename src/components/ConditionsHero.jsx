import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css"; // Import the CSS file for animations

const Termsandconditions = () => {
  return (
    <div className=" bg-[#072a30] overflow-hidden w-full ">
      {/* Text Section */}
      <div className="text-white flex flex-col items-center  pt-[30px]">
        <div className="text-center flex flex-col gap-[40px] pt-[30px] 2xl:pt-[40px] w-[85%] md:w-[70%] lg:w-[75%] 2xl:w-full">
          <h1 className="!text-[27px] md:!text-[30px] lg:!text-[40px] !font-medium tracking-[-1.5px] !leading-[33px] md:!leading-[39px] lg:!leading-[45px] 2xl:!leading-[48px]">
            Terms and Conditions
          </h1>
        </div>

        <div className="w-full h-[270px] md:h-[300px] lg:h-[350px] flex items-center justify-center relative">
          <img
            src="https://res.cloudinary.com/dhap3isd2/image/upload/v1745090064/Kriapay%20website/k6k8yvosguyixrqoao9i.svg"
            alt="Kriapay company"
            className="rotate-[7deg] w-[85%] md:w-[50%] lg:w-[40%] 2xl:w-[37%] absolute bottom-[-55px] md:bottom-[-70px] lg:bottom-[-85px] 2xl:bottom-[-115px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Termsandconditions;
