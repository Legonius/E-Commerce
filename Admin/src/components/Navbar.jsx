import React from "react";
import { assets } from "../assets/assets.js";
import { toast } from "react-toastify";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    setToken("");
    localStorage.clear("token");
    toast.success("Logout successful");
  };
  return (
    <nav className="w-full flex justify-between items-center py-2 border-b-2">
      <img className="max-w-[max(10%,85px)]" src={assets.logo} alt="logo" />
      <button
        onClick={handleLogout}
        className="min-w-[max(10%,80px)] text-xs md:text-base bg-gray-700 text-white text-center  py-2 rounded-full"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
