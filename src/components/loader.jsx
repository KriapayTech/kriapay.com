// src/components/Loader.jsx
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/kriapay-loader.json";// Update path if different

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-[120px] h-[120px]">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
