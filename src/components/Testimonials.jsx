import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John M.",
    position: "Technical specialist, Atcomm Technologies",
    message:
      "As a small business owner, Kriapay gives me peace of mind with secure, reliable payments and the best exchange rates. It's the ideal solution for my transactions.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Sarah T.",
    position: "Entrepreneur, Fintech Solutions",
    message:
      "Kriapay has transformed the way I handle transactions. The ease of use and security are top-notch. Highly recommended!",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <div className="text-center py-5 container-fluid">
      <h3 style={{fontSize:'45px', color:'#072A30', height:'94px'}}>Real stories. Don’t take our word for it.</h3>
      <div className="max-w-4xl mx-auto p-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#0f2a38] text-white p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Left: Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              
              {/* Right: Text */}
              <div className="text-center md:text-left">
                <p className="text-lg font-medium">{testimonial.message}</p>
                <p className="mt-2 text-lg font-semibold text-black">
                  {testimonial.name}
                </p>
                <p className="text-sm text-black">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Testimonials;
