import React from "react";
import { Button } from "react-bootstrap";

const Borderless = () => {
  return (
    // Container div
    <div className="w-full overflow-hidden mt-[100px] mb-[100px]">
      <div className="bg-[#072a30] rounded-[20px] overflow-hidden w-[85%] mx-auto h-[580px]">
        <div className="flex gap-4 items-center justify-center h-full">
          <div className="w-[44%] h-fit flex flex-col gap-[10px] pl-5">
            <p className="text-[30px] opacity-90 tracking-[-2px] leading-[35px] font-normal text-white ">
              Send, spend, swap,
            </p>

            <p className="text-[36px] text-white tracking-[-2.5px] leading-[35px] font-medium ">
              The borderless way with Kriapay.
            </p>
            <button
              className="text-white text-[18px] tracking-[-0.5px] leading-[35px] font-medium bg-[#1B4F56] w-[200px] h-[48px] !mt-[80px] !rounded-[8px] "
            >
              Get started
            </button>
          </div>

          <div className="overflow-hidden h-full w-[40%] relative pl-3"> 
            <img className="w-[88%] h-[90%] object-cover absolute bottom-[-10px] "
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
