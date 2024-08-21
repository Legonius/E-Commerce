import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" flex  flex-col sm:flex-row border-2 p-0">
      {/* {hero left side} */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-10 sm:py-0 flex-shrink-0">
        <div className="flex flex-col gap-3 text-slate-500 ">
          <div className="flex gap-2 items-center">
            <p className="h-[2px] w-9 sm:w-12 bg-slate-500"></p>
            <p className=" font-bold">OUR BESTSELLERS</p>
          </div>
          <h2 className="crimson-text-regular text-5xl leading-relaxed">
            Latest Arrivals
          </h2>
          <div className="flex gap-2 items-center">
            <p className=" font-bold">SHOP NOW</p>
            <p className="h-[1.5px] w-9 sm:w-12 bg-slate-500"></p>
          </div>
        </div>
      </div>

      <Link>
        <img className="w-full" src={assets.hero_img} />
      </Link>
    </div>
  );
};

export default Hero;
