import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { shopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const { showSearch, setShowSearch, searchProduct, setSearchProduct } =
    useContext(shopContext);
  const closeSearchBar = () => {
    setShowSearch(false);
    setSearchProduct("");
  };
  const search = (e) => {
    e.preventDefault();
    navigate("/collection");
  };

  return (
    <div
      className={`my-3 flex justify-center items-center bg-slate-50 gap-2 py-4 border-y-2 ${
        showSearch ? "" : "hidden"
      }`}
    >
      <form
        onSubmit={search}
        className="bg-white px-3 rounded-full flex items-center w-3/4 sm:w-1/2 justify-between h-10 border-2"
      >
        <input
          onChange={(e) => setSearchProduct(e.target.value)}
          className="bg-white flex-1 h-full outline-none text-slate-500"
          type="text"
          placeholder="Search"
          value={searchProduct}
        />
        <img
          onClick={search}
          className="h-5 cursor-pointer"
          src={assets.search_icon}
        />
        <input type="submit" hidden />
      </form>
      <img
        onClick={closeSearchBar}
        className="h-4 cursor-pointer"
        src={assets.cross_icon}
      />
    </div>
  );
};

export default SearchBar;
