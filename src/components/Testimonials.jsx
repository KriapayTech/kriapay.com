import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Emmanuel G.",
    position: "Spare Part Dealer, Lagos, Nigeria",
    message:
    "With Kriapay, I get paid from buyers from Sierra Leone, while receiving the funds in minutes and can and convert easily. It's a game-changer for remote delears like me.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859061/Kriapay%20website/wabsldnjfjpsjv9dadbr.png",
  },
  {
    name: "David D.",
    position: "CEO @ Locate Realities.",
    message:
      "As a business owner, Kriapay gives me peace of mind with their reliable offline payments. All the transactions with them were processed swiftly with a decent transfer rate. I am optimistic their mobile platforms would make things even easier.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859203/Kriapay%20website/cmui19kwibn15b4sdpko.png",
  },
  {
    name: "Michael A.",
    position: "Freelancer, Remote Africa",
    message:
      "With Kriapay, I can get paid from anywhere in the world and convert easily. It's a game-changer for remote professionals like me.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859313/Kriapay%20website/t7e58w9fhjewm5rx7man.png",
  },
  {
    name: "Emmanuel G.",
    position: "Spare Part Dealer, Lagos, Nigeria",
    message:
      "With Kriapay, I get paid from buyers from Sierra Leone, while receiving the funds in minutes and can and convert easily. It's a game-changer for remote delears like me.",
    image:
      "https://res.cloudinary.com/dhap3isd2/image/upload/v1743859313/Kriapay%20website/t7e58w9fhjewm5rx7man.png",
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
    <div
      ref={containerRef}
      className="relative my-[60px] bg-white overflow-hidden"
    >
      <h2 className="!text-center !text-[45px] !md:text-5xl !font-medium !text-[#072A30] !mb-[80px] tracking-[-3px] leading-[46px] ">
        Real stories. <br />
        Don’t take our word for it.
      </h2>

      <div className="w-full overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`flex-shrink-0 !w-[900px] items-center !h-[380px]  md:w-[60vw] lg:w-[50vw] rounded-2xl overflow-hidden shadow-md flex ${
                index % 2 === 0 ? "bg-[#f5f5f5]" : "bg-[#002F34]"
              }`}
            >
              {/* Left side: Image */}
              <div className="hidden md:block relativew-[440px] h-[350px] ">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Right side: Text */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <p
                  className={`text-[22px] md:text-xl tracking-[-1.1px] leading-[27px] font-medium ${
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
    </div>
  );
};

export default Testimonials;
