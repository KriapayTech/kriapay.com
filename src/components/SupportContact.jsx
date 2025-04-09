import React from "react";
const SupportContact = () => {
  return (
    <div className="w-full flex justify-center mt-[70px] md:mt-[100px] lg:mt-[100px] lg:mb-[100px] ">
      <div className="w-[85%] h-[550px] bg-[#072a30] rounded-[20px] flex flex-col items-center justify-center text-center mt-[100px] relative overflow-hidden text-white">
  
          <div className=" flex w-full justify-between">
            <div className=" w-[50%] flex flex-col items-start justify-center pl-[100px] ">
              <img
                className="w-[50px] h-[50px]"
                src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744198707/Kriapay%20website/qtifdmgqsmyoxsrysdnb.svg"
                alt="Kriapay coins"
              />
              <div className="  w-full flex flex-col gap-[25px] pl-[20px] mt-[30px] text-left">
                
                <p className="text-[18px] tracking-[-0.5px] ">
                  
                • Need to update your profile details?
                </p>
                <p className="!text-[18px] tracking-[-0.5px]  ">
                • Lost your phone and want to block your account?
                </p>
                <p className="!text-[18px] tracking-[-0.5px]   ">
                • A transaction didn’t go through?
                </p>
                <p className="!text-[18px] tracking-[-0.5px]  ">
                • Curious about limits, fees, or exchange rates?
                </p>
                <p className="!text-[18px] tracking-[-0.5px]   ">
                • Want to report suspicious activity?
                </p>
                <p className="!text-[18px] tracking-[-0.5px]  ">
                • Having trouble verifying your identity?
                </p>
              </div>
            </div>

            <div className=" w-[60%] flex flex-col justify-center">
              <div className="text-left w-[75%] pl-[150px] ">
                <h3 className="!text-[25px] !font-medium tracking-[-2px] ledaing-[32px]">
                  Reach out to our support team any time via:
                </h3>
                <div className="w-full flex flex-col gap-[10px] mt-[70px]">
                  <p className="flex items-center gap-[10px] text-[17px] tracking-[-0.5px] leading-[33px]">
                    <span>
                      <img
                        className="w-[26px] h-[26px] "
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508820/mail-alt-3-svgrepo-com_1_b8rfqw.svg"
                        alt="Kriapay mail"
                      />
                    </span>
                    support@kriapay.com
                  </p>
                  <p className="flex items-center gap-[10px] text-[17px] tracking-[-0.5px] leading-[33px]">
                    <span>
                      <img
                        className="w-[26px] h-[26px] "
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508824/Whatsapp_sdfk7u.svg"
                        alt="Kriapay Whatsapp"
                      />
                    </span>
                    +234 916 770 2876
                  </p>
                  <p className="flex items-center gap-[10px] text-[17px] tracking-[-0.5px] leading-[33px]">
                    <span>
                      <img
                        className="w-[26px] h-[26px] "
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508814/LiveChat_fpxpp9.svg"
                        alt="Kriapay Livechat"
                      />
                    </span>
                    Live Chat: Available in-app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default SupportContact;
