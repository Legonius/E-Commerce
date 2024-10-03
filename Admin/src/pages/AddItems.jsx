import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const AddItems = ({ token }) => {
  //Bulky upload products manually

  // useEffect(() => {
  //   const { uploadProductObject, arrayProducts } = useBulkUpload();
  //   uploadProductObject(products[1]); //manual upload a product in object
  //   arrayProducts(products);// manual upload all products in array
  // }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Winterwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const btn = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check all blank fields
    if (!image1) {
      return toast.warn("First image is require minimum");
    }
    if (sizes.length <= 0) {
      return toast.warn("Atleast one size is require");
    }
    if (price <= 0) {
      return toast.warn("Price should be set!");
    }

    btn.current.disabled = true; // button disable to prevent repeatble click
    const formData = new FormData();

    try {
      formData.set("name", name);
      formData.set("description", description);
      formData.set("price", price);
      formData.set("category", category);
      formData.set("subCategory", subCategory);
      formData.set("sizes", JSON.stringify(sizes));
      formData.set("bestseller", bestseller);

      //adding images according to upload quantity

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const add = await axios.post(
        backendUrl + "/api/product/add-product",
        formData,
        { headers: { token } }
      );

      if (add.data.success) {
        toast.success(add.data.message);

        setName("");
        setDescription("");
        setPrice(0);
        setBestseller(false);
        setCategory("Men");
        setSubCategory("Topwer");
        setSizes([]);

        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
      } else {
        toast.error("Unauthorized login again");
      }

      btn.current.disabled = false; //button enable
    } catch (error) {
      toast.error(error.message);
      btn.current.disabled = false;
    }
  };

  return (
    <div className="w-full min-h-full py-6 px-3 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[30rem] flex flex-col gap-2 sm:gap-4 text-slate-700"
      >
        <div>
          <p className="text-base sm:text-lg">Upload Image</p>
          <div className="flex flex-wrap gap-2  sm:gap-4 mt-2">
            <label htmlFor="image1">
              <img
                className="cursor-pointer w-28 sm:w-20 h-20 bg-cover"
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                id="image1"
                hidden
              />
            </label>
            <label htmlFor="image2">
              <img
                className="cursor-pointer w-28 sm:w-20 h-20 bg-cover"
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                id="image2"
                hidden
              />
            </label>
            <label htmlFor="image3">
              <img
                className="cursor-pointer w-28 sm:w-20 h-20 bg-cover"
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                id="image3"
                hidden
              />
            </label>
            <label htmlFor="image4">
              <img
                className="cursor-pointer w-28 sm:w-20 h-20 bg-cover"
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              />
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                type="file"
                id="image4"
                hidden
              />
            </label>
          </div>
        </div>
        <div>
          <label className="text-base sm:text-lg" htmlFor="product-name">
            Product name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full px-3 py-2 outline-none border-2 rounded-lg mt-2"
            placeholder="Type here"
            id="product-description"
            required
          />
        </div>
        <div className="w-full sm:justify-between text-base sm:text-lg flex flex-col sm:flex-row gap-4">
          <div>
            <p className="mb-2">Product Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="text-slate-500 text-sm sm:text-base px-4 py-2 border-2 outline-none"
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>
          <div>
            <p className="mb-2">Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subCategory}
              className="text-slate-500 text-sm sm:text-base px-4 py-2 border-2 outline-none"
            >
              <option>Topwer</option>
              <option>Bottomwear</option>
              <option>Winterwear</option>
            </select>
          </div>
          <div>
            <p className="mb-2">Product Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="text-slate-500 max-w-28 text-sm sm:text-base px-2 py-2 border-2 outline-none"
              value={price}
              placeholder="25"
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-base sm:text-lg">Product Sizes</p>
          <div className="flex gap-3">
            <span
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("S")
                    ? pre.filter((size) => size !== "S")
                    : ["S", ...pre]
                )
              }
              className={`cursor-pointer inline-block px-4 py-2 text-center  rounded border-2 hover:border-yellow-900 ${
                sizes.includes("S") ? "bg-red-300" : "bg-slate-200"
              }`}
            >
              S
            </span>
            <span
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("M")
                    ? pre.filter((size) => size !== "M")
                    : ["M", ...pre]
                )
              }
              className={`cursor-pointer inline-block px-4 py-2 text-center  rounded border-2 hover:border-yellow-900 ${
                sizes.includes("M") ? "bg-red-300" : "bg-slate-200"
              }`}
            >
              M
            </span>
            <span
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("L")
                    ? pre.filter((size) => size !== "L")
                    : ["L", ...pre]
                )
              }
              className={`cursor-pointer inline-block px-4 py-2 text-center  rounded border-2 hover:border-yellow-900 ${
                sizes.includes("L") ? "bg-red-300" : "bg-slate-200"
              }`}
            >
              L
            </span>
            <span
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("XL")
                    ? pre.filter((size) => size !== "XL")
                    : ["XL", ...pre]
                )
              }
              className={`cursor-pointer inline-block px-4 py-2 text-center  rounded border-2 hover:border-yellow-900 ${
                sizes.includes("XL") ? "bg-red-300" : "bg-slate-200"
              }`}
            >
              XL
            </span>
            <span
              onClick={() =>
                setSizes((pre) =>
                  pre.includes("XXL")
                    ? pre.filter((size) => size !== "XXL")
                    : ["XXL", ...pre]
                )
              }
              className={`cursor-pointer inline-block px-4 py-2 text-center  rounded border-2 hover:border-yellow-900 ${
                sizes.includes("XXL") ? "bg-red-300" : "bg-slate-200"
              }`}
            >
              XXL
            </span>
          </div>
        </div>
        <div>
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
          />
          <label className="text-base sm:text-lg ml-2" htmlFor="bestseller">
            Add to bestseller
          </label>
        </div>
        <button
          ref={btn}
          type="submit"
          className="disabled:opacity-75 disabled:cursor-wait bg-black text-white max-w-40 px-4 py-3 font-bold"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItems;
