import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-[150px]">
      <div className="bg-[#072a30] w-full h-fit pb-[60px]">
        <div className="text-white text-[17px] tracking-[-1px] flex flex-col gap-[20px] pt-[100px] ">
          <div className="w-full flex justify-between items-center px-[80px]">
            {/* Navs */}
            <div className="flex flex-col gap-[30px] ">
              <h4>Legal</h4>
              <div className="flex gap-[15px]">
                <p className="underline cursor-pointer">Privacy policies</p>
                <p className="underline cursor-pointer">Terms and conditions</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-[30px]">
                <p className="underline cursor-pointer">Kriacard</p>
                <p className="underline cursor-pointer">Company</p>
                <p className="underline cursor-pointer">Ask Kriapay</p>
                <p className="underline cursor-pointer">Login</p>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <h4>Connect</h4>
              <div className="flex gap-[15px]">
                <div className="flex gap-[10px]">
                  <img
                    className="w-[22px] h-[22px] object-cover "
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742553795/FaceBook_fwhfmj.svg"
                    alt="Kriapay facebook"
                  />
                  <p className="underline cursor-pointer">Facebook</p>
                </div>
                <div className="flex gap-[10px]">
                  <img
                    className="w-[22px] h-[22px] object-cover "
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742553806/X_or_Twitter_drnhcz.svg"
                    alt="Kriapay twitter"
                  />
                  X
                </div>
                <div className="flex gap-[10px]">
                  <img
                    className="w-[22px] h-[22px] object-cover "
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742553804/Instagram_aeil0t.svg"
                    alt="Kriapay Instagram"
                  />
                </div>
                <p className="underline cursor-pointer">Instagram</p>
              </div>
            </div>
          </div>

          {/* Kriapay logo */}
          <div className="w-full px-[80px] mt-[100px] ">
            <img
              className="w-[137px] h-[50px] "
              src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741440756/Kriapay_Logo_nm8w7f.svg"
              alt="Kriapay logo"
            />
          </div>

          {/* Company details & Exchange rate */}

          <div className="w-full mt-[25px] flex justify-between items-center px-[80px] ">
            <div className="w-[50%] flex flex-col gap-[10px]">
              <div className="">
                <span className="font-semibold mr-1">
                  Kria Technologies Ltd.
                </span>
                is registered with the Corporate Affairs Commission, RC 7547062:
                and operates under regulatory frameworks through trusted
                financial partners across regions.
              </div>
              <div className="pt-[20px] flex gap-[10px] ">
                <img
                  className="w-[25px] h-[25px] "
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742553804/Location_pin_qefazd.svg"
                  alt="Kriapay location"
                />
                Onijanikin Street, Alasia, Lagos, Nigeria. - Not open to the
                public.
              </div>
              <div className="flex gap-[10px]">
                <img
                  className="w-[25px] h-[25px] "
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1742508820/mail-alt-3-svgrepo-com_1_b8rfqw.svg"
                  alt="Kriapay mail"
                />
                info@kriapay.com
              </div>
              <div className="pt-[20px] ">All rights reserved. © 2025.</div>
            </div>
            <div className="w-[50%] flex justify-end">
              <p className="">Exchange rates may vary by market.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
