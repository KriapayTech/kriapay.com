import React from "react";
const SupportContact = () => {
  return (
    <div className="w-full flex justify-center mb-[70px] md:mb-[50px] md:mt-[100px] lg:mt-[100px] lg:mb-[130px] ">
      <div className="w-[85%] md:h-[700px] 2xl:h-[600px] bg-[#072a30] rounded-[25px] lg:rounded-[30px] flex flex-col items-center justify-center text-center mt-[100px] relative overflow-hidden text-white">
  
          <div className=" flex w-full justify-between flex-col md:flex-row">
            <div className="w-full md:w-[50%] flex flex-col items-start justify-center px-[30px] py-[50px] md:py-0 md:px-0 md:pl-[50px] lg:pl-[80px] 2xl:pl-[100px] ">
              <img
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                src="https://res.cloudinary.com/dhap3isd2/image/upload/v1744198707/Kriapay%20website/qtifdmgqsmyoxsrysdnb.svg"
                alt="Kriapay coins"
              />
              <div className="  w-full flex flex-col gap-[20px] md:pl-[20px] mt-[30px] text-left  ">
                
                <p className="!text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.5px] ">
                  
                • Need to update your profile details?
                </p>
                <p className="!text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.5px]  ">
                • Lost your phone and want to block your account?
                </p>
                <p className="!text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.5px]   ">
                • A transaction didn’t go through?
                </p>
                <p className="!text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.5px]  ">
                • Curious about limits, fees, or exchange rates?
                </p>
                <p className="!text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.5px]   ">
                • Want to report suspicious activity?
                </p>
                <p className="!text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.5px]  ">
                • Having trouble verifying your identity?
                </p>
              </div>
            </div>

            <div className="w-full md:w-[60%] flex flex-col justify-center">
              <div className="text-left md:w-[90%]  2xl:w-[75%] px-[30px] md:px-0 pb-[50px] md:pb-0 md:pl-[70px] lg:pr-[30px] 2xl:pr-0 2xl:pl-[150px] ">
                <h3 className="!text-[22px] md:!text-[24px] lg:!text-[26px] !font-medium tracking-[-2px] !leading-[35px]">
                  Reach out to our support team any time via:
                </h3>
                <div className="w-full flex flex-col gap-[7px] md:gap-[15px] 2xl:gap-[13px] mt-[50px] md:mt-[70px] 2xl:mt-[80px]">
                  <p className="flex items-center gap-[10px] !text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.7px] md:tracking-[-0.6px] leading-[25px] md:leading-[33px]">
                    <span>
                      <img
                        className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[25px]  lg:h-[25px]"
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508820/mail-alt-3-svgrepo-com_1_b8rfqw.svg"
                        alt="Kriapay mail"
                      />
                    </span>
                    support@kriapay.com
                  </p>
                  <p className="flex items-center gap-[10px] !text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.7px] md:tracking-[-0.6px] leading-[25px] md:leading-[33px]">
                    <span>
                      <img
                        className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[25px]  lg:h-[25px] "
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508824/Whatsapp_sdfk7u.svg"
                        alt="Kriapay Whatsapp"
                      />
                    </span>
                    +234 916 770 2876
                  </p>
                  <p className="flex items-center gap-[10px] !text-[15px] md:!text-[16px] lg:!text-[18px] tracking-[-0.7px] md:tracking-[-0.6px] leading-[33px]">
                    <span>
                      <img
                        className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[25px]  lg:h-[25px] "
                        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508814/LiveChat_fpxpp9.svg"
                        alt="Kriapay Livechat"
                      />
                    </span>
                    Live Chat: Available in-app
                  </p>
                  {/* <h4 className="w-full !text-[17px] !font-normal tracking-[-0.5px] !leading-[29px] pt-[100px] ">"Experience reliable support from a team that's always here for you."</h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default SupportContact;
