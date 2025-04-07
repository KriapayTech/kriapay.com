import React from "react";
import { Button } from "react-bootstrap";

const Setup = () => {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden mt-[150px]">
      <div className="flex justify-between items-center px-[100px] gap-[20px] mt-[50px]">
        <div className="overflow-hidden relative h-[500px]  w-[50%]">
          <img className="absolute w-[800px] h-[870px] right-[-30px] top-[-30px] object-cover "
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742301448/Kriacard_black_a9kwl7.svg"
            alt="Kriapay Kriacard"
          />
        </div>
        <div className="w-[42%] h-fit items-end flex flex-col gap-[50px] pl-[10px] pb-[110px] ">
          <p className="text-left w-full  text-[#072A30] text-[28px] tracking-[-1.5px] leading-[33px] font-medium   ">
            Use Kriacard anywhere Visa or Verve is accepted
          </p>
          <p className="text-left w-full  text-[#072A30] text-[21px] tracking-[-1.5px] leading-[30px] font-normal  ">
            Shop online, subscribe to services like Netflix and Spotify, and
            make payments on international platforms with no hidden fees and 
            currency barriers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setup;
