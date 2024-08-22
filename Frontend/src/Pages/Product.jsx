import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, currency } = useContext(shopContext);
  const [image, setImage] = useState([]);
  const [size, setSize] = useState("");

  const fetchProduct = () => {
    if (products.length > 0) {
      let copyProducts = products.slice();
      copyProducts = copyProducts.find((item) => item._id === productId);
      setSelectedProduct(copyProducts);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [productId, products]);
  useEffect(() => {
    setImage(selectedProduct?.image[0]);
  }, [selectedProduct]);

  return selectedProduct ? (
    <div className="flex flex-col gap-10 sm:flex-row sm:gap-8">
      {/*Product Images Display */}
      <div className="flex flex-1 gap-1 flex-row">
        {/* all small images */}
        <div className="w-1/5 flex flex-col justify-between gap-1 overflow-x-auto overflow-y-scroll">
          {selectedProduct.image.map((image, index) => (
            <img
              className="cursor-pointer"
              onClick={() => setImage(image)}
              key={index}
              src={image}
            />
          ))}
        </div>
        <div className="flex-1">
          <img className="w-full h-auto" src={image} />
        </div>
      </div>
      <div className="flex flex-col gap-6 flex-1 text-slate-900 p-2">
        <p className="text-lg sm:text-2xl font-semibold">
          {selectedProduct.name}
        </p>
        <div className="flex gap-1 items-center">
          <img className="h-3 sm:h-4" src={assets.star_icon} alt="" />
          <img className="h-3 sm:h-4" src={assets.star_icon} alt="" />
          <img className="h-3 sm:h-4" src={assets.star_icon} alt="" />
          <img className="h-3 sm:h-4" src={assets.star_icon} alt="" />
          <img className="h-3 sm:h-4" src={assets.star_dull_icon} alt="" />
          <span>(122)</span>
        </div>
        <p className="text:xl  md:text-3xl">
          {currency} {selectedProduct.price}
        </p>
        <p className="text-gray-400">{selectedProduct.description}</p>
        <p className="text-slate-600 ">Select Size</p>
        <div className="flex gap-2">
          {selectedProduct.sizes.map((size, index) => (
            <span
              key={index}
              onClick={() => setSize(size)}
              className="bg-slate-200 text-lg md:text-2xl w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              {size}
            </span>
          ))}
        </div>
        <button className="py-4 px-6 bg-black text-white w-40 md:w-60">
          ADD TO CART
        </button>
        <div className="text-gray-400">
          <p>100% Original product</p>
          <p>Cash on delivery is available on this product</p>
          <p>Easy return and exchange policy within 7 days</p>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Product;
