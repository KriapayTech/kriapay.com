import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Emmanuel G.",
    position: "Spare Part Dealer, Lagos, Nigeria",
    message:
    "With Kriapay, I get paid from buyers from Sierra Leone, while receiving the funds in minutes and can and convert easily. It's a game-changer for remote delears like me.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859203/Kriapay%20website/cmui19kwibn15b4sdpko.png",
  },
  {
    name: "Ebuka U.",
    position: "Technical specialist, Atcomm Technologies",
    message:
    "Kriapay offline transactions has been a great help for my business. Their low fee and practical exchange rate has saved me time and money. I look forward to their mobile launch",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859061/Kriapay%20website/wabsldnjfjpsjv9dadbr.png",
  },
  {
    name: "David D.",
    position: "Co-Founder @ Locate Realities",
    message:
      "As a business owner, Kriapay gives me peace of mind with their reliable offline payments. All the transactions with them were processed swiftly wth a decent transfer rate. I am certain their mobile platforms would make things 10x easier.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859313/Kriapay%20website/t7e58w9fhjewm5rx7man.png",
  },
  {
    name: "Akinyemi B.",
    position: "HR Associate @ Daily Delights",
    message:
    "Despite being offline, Kriapay comes through when I make transactions to Sierra Leone. I wait in great anticipation for their mobile launch. Can't wait to use features like the currency swap and the exchange rate calculator.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743862715/Kriapay%20website/ijks7kgwoobvwwrutbn8.png",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <>
      {/* Section Title - Shared by both mobile & desktop */}
      <div className="my-[70px] lg:mb-[100px] bg-white">
        <h2 className="!text-[30px] md:!text-[40px] !text-center lg:!text-[40px] 2xl:!text-[45px] !font-medium !text-[#072A30] !mb-[80px]  tracking-[-3px] leading-[46px]">
          Real stories. <br />
          Don’t take our word for it.
        </h2>
  
        {/* Desktop & Tablet: Scrollable Testimonials */}
        <div ref={containerRef} className="hidden md:block w-full overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`flex-shrink-0 !w-[700px] lg:!w-[800px] 2xl:!w-[870px] items-center !h-[380px] rounded-2xl overflow-hidden shadow-md flex ${
                  index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#002F34]"
                }`}
              >
                {/* Left side: Image */}
                <div className="hidden md:block relative md:h-[300px] lg:h-[330px] 2xl:h-[350px] ">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Right side: Text */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <p
                    className={`text-[20px] lg:text-[21px] 2xl:text-[22px] md:text-xl tracking-[-1.1px] leading-[27px] font-medium ${
                      index % 2 === 0 ? "text-[#050505]" : "text-white"
                    }`}
                  >
                    “{t.message}”
                  </p>
                  <div className="mt-6">
                    <p
                      className={`font-semibold text-[18px] tracking-[-0.5px] leading-[28px] ${
                        index % 2 === 0 ? "text-[#0F1728]" : "text-white"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-[14px] font-normal tracking-[-0.5px] leading-[24px] ${
                        index % 2 === 0 ? "text-[#475466]" : "text-gray-300"
                      }`}
                    >
                      {t.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
  
        {/* Mobile: Stacked Testimonials (first 3 only) */}
        <div className="md:hidden space-y-[40px] flex flex-col items-center justify-center">
          {testimonials.slice(1, 4).map((t, index) => (
            <div
              key={index}
              className={`rounded-[16px] overflow-hidden p-[25px] flex flex-col items-left w-[85%] ${
                index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#072A30]"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-[370px] h-[270px] object-contain mb-[30px]"
              />
              <p
                className={`text-[17px] tracking-[-1px] text-left leading-[24px] font-normal  ${
                  index % 2 === 0 ? "text-[#050505]" : "text-white"
                }`}
              >
                “{t.message}”
              </p>
              <div className="mt-4 text-left">
                <p
                  className={`font-semibold text-[16px] tracking-[-0.5px] leading-[28px] text-left ${
                    index % 2 === 0 ? "text-[#0F1728]" : "text-white"
                  }`}
                >
                  {t.name}
                </p>
                <p
                  className={`text-[12px] font-normal tracking-[-0.5px] leading-[24px] text-left ${
                    index % 2 === 0 ? "text-[#475466]" : "text-[#F3F3F3]"
                  }`}
                >
                  {t.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
};

export default Testimonials;
