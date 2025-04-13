import React from "react";
import { Button } from "react-bootstrap";

const Borderless = () => {
  return (
    // Container div
    <div className="w-full overflow-hidden mt-[100px] mb-[80px]">
      <div className="bg-[#072a30] rounded-[25px] lg:rounded-[30px] overflow-hidden w-[85%] mx-auto h-fit md:h-[580px]">
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-4 items-center justify-between lg:justify-center h-full">
          <div className="w-full px-[30px] pt-[60px] md:px-0 md:pt-0 md:w-[75%] lg:w-[44%] h-fit flex flex-col gap-[10px] md:gap-[10px] md:pl-[50px] lg:pl-[70px] 2xl:pl-5 ">
            <p className="text-[23px] md:text-[25px] tracking-[-1.5px] lg:text-[30px] opacity-90 lg:tracking-[-2px] leading-[35px] font-normal text-white ">
              Send, spend, swap,
            </p>

            <p className="!text-[23px] leading-[35px] md:!text-[29px] tracking-[-1.5px] lg:!text-[36px] text-white lg:tracking-[-2.5px] md:leading-[45px] 2xl:leading-[35px] font-medium ">
              The borderless way with Kriapay.
            </p>
            <button className="text-white !text-[14px] lg:!text-[17px] tracking-[-0.5px] leading-[35px] font-medium bg-[#1B4F56] w-[116px] h-[39px] md:w-[159px] md:h-[43px] lg:w-[190px] lg:h-[48px] !mt-[25px] md:!mt-[80px] !rounded-[8px] ">
              Get started
            </button>
          </div>

          <div className="overflow-hidden h-[365px] md:h-full w-full md:w-[53%]  2xl:w-[40%] relative 2xl:pl-3">
            <img
              className=" md:w-[80%] 2xl:w-[88%] h-full md:h-[75%] lg:h-[83%] 2xl:h-[85%] object-cover absolute left-[-17px] md:left-[40px] lg:left-[75px] lg:right-0 bottom-[-40px] 2xl:left-[20px]  md:bottom-[-10px] overflow-x-visible "
              src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg"
              alt="Abuja Landmark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borderless;
