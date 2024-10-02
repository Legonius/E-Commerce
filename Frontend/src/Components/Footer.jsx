import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="mt-10 text-slate-400 flex flex-col gap-10 sm:grid grid-cols-[3fr_1fr_1fr]">
        <div>
          <img className="h-8 md:h-10" src={assets.logo} />
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi
            quis illo quasi nemo, quidem deleniti ipsum ex molestiae earum, id
            officiis esse rerum similique distinctio! Velit nulla id blanditiis.
          </p>
        </div>
        <div>
          <p className="text-slate-800 text-xl sm:text-2xl ">COMPANY</p>
          <ul className="mt-6">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-slate-800 text-xl sm:text-2xl ">GET IN TOUCH</p>
          <ul className="mt-6">
            <li>+95-9-402558139</li>
            <li>emoinblackzone@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <hr />
        <p className="mb-4 text-center">
          Copyright 2024@zawminthu.com ~ All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
