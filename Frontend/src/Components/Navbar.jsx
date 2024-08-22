import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { setShowSearch, showSearch } = useContext(shopContext);
  const navigate = useNavigate();
  const handleSearchIcon = () => {
    setShowSearch(!showSearch);
    navigate("/collection");
  };

  return (
    <div className="max-w-full  py-4 flex justify-between items-center">
      <Link to={"/"}>
        <img className="h-8 md:h-10" src={assets.logo} />
      </Link>
      <ul className="hidden sm:flex items-center gap-4">
        <NavLink to={"/"} className={"flex flex-col items-center"}>
          <p>HOME</p>
          <hr className="hidden w-2/4 h-[1.5px] bg-gray-400 border-none" />
        </NavLink>
        <NavLink to={"/collection"} className={"flex flex-col items-center"}>
          <p>COLLECTION</p>
          <hr className="hidden w-2/4 h-[1.5px] bg-gray-400 border-none" />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center"}>
          <p>ABOUT</p>
          <hr className="hidden w-2/4 h-[1.5px] bg-gray-400 border-none" />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center"}>
          <p>CONTACT</p>
          <hr className="hidden w-2/4 h-[1.5px] bg-gray-400 border-none" />
        </NavLink>
      </ul>
      <div className="flex gap-6">
        <div className="cursor-pointer">
          <img
            onClick={handleSearchIcon}
            className="h-6"
            src={assets.search_icon}
          />
        </div>

        <div className="group  relative">
          <img className="h-6 cursor-pointer" src={assets.profile_icon} />
          <div className="group-hover:flex  flex-col gap-4 hidden w-32 text-slate-600 bg-slate-100 px-5 py-3 rounded-lg absolute right-[-10px] top-[20px]">
            <p className="hover:text-black cursor-pointer">My Profile</p>
            <p className="hover:text-black cursor-pointer">Orders</p>
            <p className="hover:text-black cursor-pointer">Logout</p>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <img className="h-6" src={assets.cart_icon} />
          <div className="bg-red-500 flex justify-center items-center w-5 h-5 text-xs  rounded-full text-slate-50 absolute right-[-5px]  bottom-[-5px]">
            10
          </div>
        </div>

        <div
          onClick={() => setMenu(true)}
          className="cursor-pointer flex items-center sm:hidden"
        >
          <img className="h-4" src={assets.menu_icon} />
        </div>
      </div>
      {/* {menu collapse slider} */}
      <div
        className={`${
          menu ? "w-screen" : " translate-x-[100vw]"
        } bg-white absolute top-0 right-0 transition-all`}
      >
        <div
          onClick={(e) => setMenu(false)}
          className="flex items-center gap-2 m-4 cursor-pointer"
        >
          <img className="h-4 rotate-180" src={assets.dropdown_icon} />
          <span className="text-lg">Back</span>
        </div>
        <div className="mt-5 ml-4 flex flex-col gap-4">
          <NavLink
            onClick={(e) => setMenu(false)}
            to={"/"}
            className=" text-lg p-3 rounded w-[90%]"
          >
            HOME
          </NavLink>
          <hr className="bg-slate-400" />
          <NavLink
            onClick={(e) => setMenu(false)}
            to={"/collection"}
            className=" text-lg p-3 rounded w-[90%]"
          >
            COLLECTION
          </NavLink>
          <hr className="bg-slate-400" />
          <NavLink
            onClick={(e) => setMenu(false)}
            to={"/about"}
            className=" text-lg p-3 rounded w-[90%]"
          >
            ABOUT
          </NavLink>
          <hr className="bg-slate-400" />
          <NavLink
            onClick={(e) => setMenu(false)}
            to={"/contact"}
            className=" text-lg p-3 rounded w-[90%]"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
