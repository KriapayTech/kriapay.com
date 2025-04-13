import React from "react";
import { Button } from "react-bootstrap";

const Barriers = () => {
  return (
    // Container div
    <div className="w-full overflow-hidden mt-[70px] md:mt-[110px] mb-[80px] md:mb-[50px] 2xl:mb-[70px]">
      <div className="bg-[#072a30] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] overflow-hidden w-[85%] mx-auto h-fit md:h-[580px]">
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-4 items-center justify-between lg:justify-center h-full">
          <div className="w-full px-[30px] pt-[60px] md:px-0 md:pt-0 md:w-[65%] lg:w-[47%] h-fit flex flex-col gap-[10px] md:gap-[10px] md:pl-[40px] lg:pl-[40px]  2xl:pl-5 ">
            <p className="text-[23px] md:text-[25px] tracking-[-1.5px] lg:text-[29px] 2xl:text-[30px] opacity-90 lg:tracking-[-2px] leading-[35px] font-normal text-white ">
              We're breaking barriers together,
            </p>

            <p className="!text-[23px] leading-[35px] md:!text-[29px] tracking-[-1.5px] lg:text-[35px] 2xl:!text-[36px] text-white lg:tracking-[-2.5px] md:leading-[45px] 2xl:leading-[45px] font-medium  ">
            Reshaping the financial future for Africa
            </p>
            <a href="https://kriapay.vercel.app/login" target="_blank" rel="noopener noreferrer">
            <button className="text-white !text-[14px] lg:!text-[17px] tracking-[-0.5px] leading-[35px] font-medium bg-[#1B4F56] w-[116px] h-[39px] md:w-[159px] md:h-[43px] lg:w-[190px] lg:h-[48px] !mt-[25px] md:!mt-[80px] !rounded-[8px] ">
              Get started
            </button>
            </a>
            
          </div>

          <div className="overflow-visible h-[365px] md:h-full w-full md:w-[53%] lg:w-[45%] justify-center  2xl:w-[40%] relative 2xl:pl-3  flex items-center ">
            <img
              className="md:w-[90%]  lg:w-[80%] 2xl:w-[85%] h-[75%]  md:h-[65%] md:right-[-30px] md:absolute lg:relative lg:h-[70%] 2xl:h-[70%] object-cover 2xl:relative overflow-visible "
              src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742043045/AfricaGlobe_u3rytm.svg"
              alt="Kriapay globe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barriers;
