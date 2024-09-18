import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-2 border-b-2">
      <img className="max-w-[max(10%,85px)]" src={assets.logo} alt="logo" />
      <button className="min-w-[max(10%,80px)] text-xs md:text-base bg-gray-700 text-white text-center  py-2 rounded-full">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
