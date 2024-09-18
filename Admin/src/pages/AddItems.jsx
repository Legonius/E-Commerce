import React from "react";
import { assets } from "../assets/assets";

const AddItems = ({ token }) => {
  return (
    <div className="w-full min-h-full py-6 px-3 sm:px-6">
      <form className="w-full max-w-[30rem] flex flex-col gap-2 sm:gap-4 text-slate-700">
        <div>
          <p className="text-base sm:text-lg">Upload Image</p>
          <div className="flex flex-wrap gap-2  sm:gap-4 mt-2">
            <label htmlFor="image1">
              <img
                className="cursor-pointer w-28 sm:w-20"
                src={assets.upload_area}
              />
              <input type="file" id="image1" hidden />
            </label>
            <label htmlFor="image2">
              <img
                className="cursor-pointer w-28 sm:w-20"
                src={assets.upload_area}
              />
              <input type="file" id="image2" hidden />
            </label>
            <label htmlFor="image3">
              <img
                className="cursor-pointer w-28 sm:w-20"
                src={assets.upload_area}
              />
              <input type="file" id="image3" hidden />
            </label>
            <label htmlFor="image4">
              <img
                className="cursor-pointer w-28 sm:w-20"
                src={assets.upload_area}
              />
              <input type="file" id="image4" hidden />
            </label>
          </div>
        </div>
        <div>
          <label className="text-base sm:text-lg" htmlFor="product-name">
            Product name
          </label>
          <input
            className="w-full px-3 py-2 outline-none border-2 rounded-lg mt-2"
            type="text"
            placeholder="Type here"
            id="product-name"
            required
          />
        </div>
        <div>
          <label className="text-base sm:text-lg" htmlFor="product-description">
            Product description
          </label>
          <textarea
            className="w-full px-3 py-2 outline-none border-2 rounded-lg mt-2"
            placeholder="Type here"
            id="product-description"
            required
          />
        </div>
        <div className="w-full sm:justify-between text-base sm:text-lg flex flex-col sm:flex-row gap-4">
          <div>
            <p className="mb-2">Product category</p>
            <select className="text-slate-500 text-sm sm:text-base px-4 py-2 border-2 outline-none">
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>
          <div>
            <p className="mb-2">Sub category</p>
            <select className="text-slate-500 text-sm sm:text-base px-4 py-2 border-2 outline-none">
              <option>Topwer</option>
              <option>Bottomwear</option>
              <option>Winterwear</option>
            </select>
          </div>
          <div>
            <p className="mb-2">Product Price</p>
            <input
              type="number"
              className="text-slate-500 max-w-28 text-sm sm:text-base px-2 py-2 border-2 outline-none"
              defaultValue={25}
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-base sm:text-lg">Product Sizes</p>
          <div className="flex gap-3">
            <span className="inline-block px-4 py-2 text-center  bg-slate-200 rounded border-2 hover:border-yellow-900">
              S
            </span>
            <span className="inline-block px-4 py-2 text-center  bg-slate-200 rounded border-2 hover:border-yellow-900">
              M
            </span>
            <span className="inline-block px-4 py-2 text-center  bg-slate-200 rounded border-2 hover:border-yellow-900">
              L
            </span>
            <span className="inline-block px-4 py-2 text-center  bg-slate-200 rounded border-2 hover:border-yellow-900">
              XL
            </span>
            <span className="inline-block px-4 py-2 text-center  bg-slate-200 rounded border-2 hover:border-yellow-900">
              XXL
            </span>
          </div>
        </div>
        <div>
          <input type="checkbox" id="bestseller" />
          <label className="text-base sm:text-lg ml-2" htmlFor="bestseller">
            Add to bestseller
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white max-w-40 px-4 py-3 font-bold"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItems;
