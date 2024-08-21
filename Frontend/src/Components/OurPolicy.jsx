import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="text-slate-400 mb-4 flex flex-col sm:flex-row justify-evenly gap-8 items-center">
      <div className="flex flex-col justify-center items-center">
        <img className="h-14 mb-4" src={assets.exchange_icon} />
        <p className="text-slate-900 ">Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className="h-14 mb-4" src={assets.quality_icon} />
        <p className="text-slate-900 ">7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className="h-14 mb-4" src={assets.support_img} />
        <p className="text-slate-900 ">Best customer support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
