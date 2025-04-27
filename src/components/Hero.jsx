import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  const LogoTicker = () => {
    const scrollingLogos = [...logos, ...logos]; // Repeat for seamless loop

    return (
      <div className="logo-ticker-container">
        <div className="logo-ticker-track">
          {scrollingLogos.map((logo, index) => (
            <div className="logo-ticker-item" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="text-center py-5 bg-[#072a30]">
      {/* Centered Content Wrapper */}
      <div className="mx-auto max-w-[754px]">
        <h1 className="text-white z-20 tracking-[-2px] md:tracking-[-3px] !text-[38px] md:!text-[55px] lg:!text-[58px] 2xl:!text-[62px] !leading-[105%]">
          You Can Pay Less To Send More.
        </h1>
        <p className="mx-auto text-[14px] w-[83%] md:text-[18px] text-white max-w-[650px] !mt-[45px] z-20 tracking-[-0.7px] md:tracking-[-1px] opacity-80 !leading-[135%]">
          Send and receive money across Africa with ease, low cost, and
          competitive exchange rates.
        </p>
      </div>

      {/* Wallet Balance Card */}
      <div className="pulsing-wrapper relative">
        <div class="absolute w-full h-[500px] 2xl:h-[450px] bottom-[-0px] flex items-end justify-center overflow-hidden">

  <div class="absolute bottom-[-30px] 2xl:bottom-[-60px] flex items-center justify-center">

    <div class="w-[80px] h-[80px] outline-circle absolute"></div>

    <div class="w-[200px] h-[200px] outline-circle absolute pulse-medium"></div>

    <div class="w-[400px] h-[400px] outline-circle absolute pulse-large"></div>
  </div>
</div>

        <Card
          className="mx-auto p-3 text-dark !w-[80%] !h-[190px] md:!w-[390px] md:!h-[210px] lg:!w-[470px] lg:!h-[250px] 2xl:!w-[530px] 2xl:!h-[280px] mt-[70px] py- px-7 !rounded-[30px] !bg-[#1b4f56] backdrop-opacity-100 overflow-hidden"
          style={{
            overlay: "black", // Ensures overflow is hidden
          }}
        >
          <Card.Body className="p-0 m-0">
            <div className="flex dflex items-center justify-between gap-[10px] md:py-[7px] md:px-[7px] lg:py-[10px] lg:px-[12px]">
              {/* First Div */}
              <div className="bg-white rounded-[20px] w-[88px] h-[32px] md:w-[96px] md:h-[35px] lg:w-[110px] lg:h-[40px] flex items-center justify-between p-[5px]">
                <img
                  className="w-[22px] h-[22px] md:w-[25px] md:h-[25px] lg:w-[28px] lg:h-[28px] 2xl:w-[30px] 2xl:h-[30px] ml-1"
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741473178/Nigerian_flag_dbzt9k.svg"
                  alt="Nigerian Flag"
                />
                <p className="text-dark m-0 pr-4 font-semibold text-[12px] tracking-[-0.5px] md:tracking-normal md:text-[16px] lg:text-[17px] 2xl:text-[18px]">
                  NGN
                </p>
              </div>

              {/* Second Div (Dotted Image) */}
              <div className="w-[22px] h-[22px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] rounded-[100px] bg-white flex items-center justify-center">
                <img
                  className="w-[22px] h-[22px] md:w-[25px] md:h-[25px] lg:w-[28px] lg:h-[28px] 2xl:w-[30px] 2xl:h-[30px] cursor-pointer"
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741474480/3_dotted_line_ofavmw.svg"
                  alt="Dotted Icon"
                />
              </div>
            </div>

            {/* Wallet Balance and Abuja Landmark */}
            <div className="flex justify-betweeen items-center mt-[30px] md:mt-[25px] lg:mt-[50px]">
              {/* Left Section: Wallet Balance */}
              <div className="flex flex-col items-start h-[100px] md:h-[110px] lg:h-[115px] 2xl:h-[130px] pt-4 px-[5px] md:px-[15px] justify-between">
                <div className="flex items-center gap-[8px]">
                  <p className="text-[12px] md:text-[16px] 2xl:text-[18px] text-white m-0 tracking-[-1px] leading-[100%] font-medium">
                    Wallet balance
                  </p>
                  <img
                    className="w-[15px] h-[15px] md:w-[18px] md:h-[18px] 2xl:w-[20px] 2xl:h-[20px]"
                    src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741475472/Hide_eye_g2czes.svg"
                    alt="Eye Icon"
                  />
                </div>
                <div className="flex items-end">
                  <h5 className="text-white flex !text-[19px] md:!text-[22px] lg:!text-[24px] 2xl:!text-[25px] !font-semibold">
                    NGN
                  </h5>
                  <h4 className="text-white !text-[29px] md:!text-[36px] lg:!text-[39px] 2xl:!text-[40px] !font-semibold pl-1">
                    *****
                  </h4>
                </div>
              </div>

              {/* Right Section: Abuja Landmark Image */}
              <div className="flex items-center justify-end flex-1 ml-4 relative overflow-visible">
                <img
                  className="w-[380px] h-[270px] scale-125 opacity-50 absolute top-[-105px] md:top-[-90px] object-contain"
                  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg"
                  alt="Abuja Landmark"
                />
              </div>
            </div>
            <div class="relative flex items-center justify-center"></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
