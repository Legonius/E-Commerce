import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products, searchProduct, showSearch } = useContext(shopContext);
  const [showFilter, setShowFiter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const selectCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };
  const selectSubCategory = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategories((prev) => [...prev, e.target.value]);
    }
  };
  const sorting = (e) => {
    const copyFp = filteredProducts.slice();
    switch (sortType) {
      case "Low-High":
        setFilteredProducts(copyFp.sort((a, b) => a.price - b.price));
        break;
      case "High-Low":
        setFilteredProducts(copyFp.sort((a, b) => b.price - a.price));
        break;
      default:
        filteringWithCategory();
        break;
    }
  };

  const filteringWithCategory = () => {
    let copyFilterProducts = products.slice();
    if (searchProduct && showSearch) {
      copyFilterProducts = copyFilterProducts.filter((item) =>
        item.name.toLowerCase().includes(searchProduct.toLowerCase())
      );
    }
    if (categories.length > 0) {
      copyFilterProducts = copyFilterProducts.filter((item) =>
        categories.includes(item.category)
      );
    }
    if (subCategories.length > 0) {
      copyFilterProducts = copyFilterProducts.filter((item) =>
        subCategories.includes(item.subCategory)
      );
    }
    setFilteredProducts(copyFilterProducts);
  };

  useEffect(() => {
    let copyProducts = products.slice();
    setFilteredProducts(copyProducts);
  }, []);
  useEffect(() => {
    filteringWithCategory();
  }, [categories, subCategories, searchProduct]);
  useEffect(() => {
    sorting();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <p className="text-xl md:text-2xl">FILTERS</p>
          <img
            onClick={() => setShowFiter(!showFilter)}
            className={`w-3 h-4 sm:hidden cursor-pointer ${
              showFilter ? "rotate-90" : ""
            } transition-all`}
            src={assets.dropdown_icon}
          />
        </div>

        <div
          className={`p-4 flex flex-col gap-4 border-2 sm:flex ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="text-base sm:text-lg">CATEGORIES</p>
          <ul className="flex flex-col gap-3 text-slate-400 ">
            <label className="flex gap-3">
              <input
                onChange={(e) => selectCategory(e)}
                className="mr-1 w-4 "
                type="checkbox"
                value={"Men"}
              />{" "}
              Men
            </label>
            <label className="flex gap-3">
              <input
                onChange={(e) => selectCategory(e)}
                className="mr-1 w-4 "
                type="checkbox"
                value={"Women"}
              />{" "}
              Women
            </label>
            <label className="flex gap-3">
              <input
                onChange={(e) => selectCategory(e)}
                className="mr-1 w-4 "
                type="checkbox"
                value={"Kids"}
              />{" "}
              Kids
            </label>
          </ul>
        </div>
        <div
          className={`p-4 flex flex-col gap-4 border-2 px-4 sm:flex ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="text-base sm:text-lg">TYPE</p>
          <ul className="flex flex-col gap-3 text-slate-400">
            <label className="flex gap-3">
              <input
                onChange={selectSubCategory}
                className="mr-1 w-4 "
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </label>
            <label className="flex gap-3">
              <input
                onChange={selectSubCategory}
                className="mr-1 w-4 "
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </label>
            <label className="flex gap-3">
              <input
                onChange={selectSubCategory}
                className="mr-1 w-4 "
                type="checkbox"
                value={"Winterwear"}
              />
              Winterwear
            </label>
          </ul>
        </div>
      </div>

      {/* {right Side} */}
      <div>
        <div className="flex flex-col gap-4 sm:gap-1 sm:flex-row sm:justify-between">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <div>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 py-2 px-1 "
            >
              <option value={"Relavent"}>Sort by: Relavent</option>
              <option value={"Low-High"}>Sort by: Low to High</option>
              <option value={"High-Low"}>Sort by: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredProducts.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
