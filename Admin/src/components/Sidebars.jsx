import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Sidebars = () => {
  return (
    <div className="w-[18%] h-full border-r-2 flex flex-col gap-4 pt-7">
      <NavLink
        to={"/"}
        className="flex justify-center sm:justify-start sm:gap-1 md:gap3 gap-3 items-center p-3 sm:pr-0 border-2 border-r-0 rounded"
      >
        <img className="w-6" src={assets.add_icon} alt="add" />
        <span className="hidden sm:block sm:text-sm text-lg">Add Items</span>
      </NavLink>
      <NavLink
        to={"/list-items"}
        className="flex justify-center sm:justify-start sm:gap-1 md:gap3 gap-3 items-center p-3 sm:pr-0 border-2 border-r-0 rounded"
      >
        <img className="w-6" src={assets.order_icon} alt="add" />
        <span className="hidden sm:block sm:text-sm text-lg">List Items</span>
      </NavLink>
      <NavLink
        to={"/orders"}
        className="flex justify-center sm:justify-start sm:gap-1 md:gap3 gap-3 items-center p-3 sm:pr-0 border-2 border-r-0 rounded"
      >
        <img className="w-6" src={assets.order_icon} alt="add" />
        <span className="hidden sm:block sm:text-sm text-lg">Orders</span>
      </NavLink>
    </div>
  );
};

export default Sidebars;
