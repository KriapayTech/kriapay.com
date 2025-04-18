import React from "react";
import { Button } from "react-bootstrap";

const Setup = () => {
  return (
    <div className="bg-[#FFFFFF] overflow-hidden mt-[70px] md:mt-[150px] mb-[70px] md:mb-[150px] lg:mb-[190px] 2xl:mt-[170px] 2xl:mb-[210px]">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full md:px-[80px] 2xl:px-[100px] gap-[20px]  2xl:gap-[20px] lg:mt-[50px]  ">
        <div className="overflow-hidden  px-[30px] md:px-0 relative h-[350px] lg:h-[450px] 2xl:h-[500px] w-[80%] lg:w-[54%] 2xl:w-[50%]  ">
          <img
            className="absolute w-full md:w-[550px] lg:w-[650px] 2xl:w-[800px] h-[400px] md:h-[580px] lg:h-[670px] 2xl:h-[870px] left-[-30px] md:left-[-15px] lg:left-[-20px] 2xl:left-[30px] bottom-[-100px] md:top-[-30px] object-cover   "
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742301448/Kriacard_black_a9kwl7.svg"
            alt="Kriapay Kriacard"
          />
        </div>
        <div className="w-full px-[37px] md:px-[50px] lg:px-0 lg:w-[45%] pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-[42%] h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-[60px] pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <p className="text-left md:w-[80%] flex lg:w-full  text-[#072A30] text-[23px] md:text-[27px] lg:text-[28px] tracking-[-1.5px] leading-[33px] font-medium   ">
            Use Kriacard anywhere Visa or Verve is accepted
          </p>
          <p className="text-left md:w-[90%] lg:w-full  text-[#072A30] text-[17px] md:text-[21px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] font-normal  ">
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