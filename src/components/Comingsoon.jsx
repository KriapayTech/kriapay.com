import React from "react";

const Comingsoon = () => {
  return (

    <div className=" w-full flex pt-[100px]">
    <div className="bg-[#072a30] w-[85%] rounded-[20px] overflow-hidden mx-auto">
        <div>
        <div className="d-flex justify-content-center align-items-center ">
<h4 className="text-center !text-[45px] text-white !mt-[70px] !mb-[40px] tracking-[-3px] !leading-[47px] "> Coming soon <br/>Kriacard.</h4>
</div>

<div className="flex gap-[20px]">
<div className="overflow-hidden relative w-[48%] h-[560px] ">
<img
  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742049980/ComingSoon-KriaCard_djn7wa.svg"
  alt="Abuja Landmark"
  className="w-[650px] h-[800px] overflow-hidden absolute bottom-[-250px] object-cover"
/>
</div>
<div className="w-[40%] pt-[50px]">
<p className="text-[30px] text-white tracking-[-2px] leading-[40px] font-medium">
International transactions, local convinience
</p>
<p className="text-[17px] text-white tracking-[-0.5px] leading-[30px] opacity-90 !mt-[30px]">
Kriacard empowers you to make global payments in your local currency, eliminating the hassel of currency conversion and hidden charges.
</p>
<p className="text-[17px] text-white !mt-[30px] tracking-[-0.5px] leading-[30px] opacity-90 ">
Spend in confidence with Kriacard.</p>
<button  className="text-white bg-[#1B4F56] w-[138px] h-[49px] !mt-[40px] border-0 !rounded-[8px] ">Get started</button>
</div>
</div>

          
        </div>
    </div>
    
  </div>
   
  );
};

export default Comingsoon;
