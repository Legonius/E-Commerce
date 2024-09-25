import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, currency, addToCart } = useContext(shopContext);
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
    setImage(selectedProduct?.image[0].url);
  }, [selectedProduct]);

  return selectedProduct ? (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-8">
        {/*Product Images Display */}
        <div className="flex flex-1 gap-1 flex-row">
          {/* all small images */}
          <div className="w-1/5 flex flex-col justify-between gap-1 overflow-x-auto overflow-y-scroll">
            {selectedProduct.image.map((image, index) => (
              <img
                className="cursor-pointer shrink-0"
                onClick={() => setImage(image)}
                key={index}
                src={image.url}
              />
            ))}
          </div>
          <div className="flex-1">
            <img className="w-full h-auto" src={image} />
          </div>
        </div>
        {/* ---------Description ----------- */}
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
            {selectedProduct.sizes.map((sizee, index) => (
              <span
                key={index}
                onClick={() => setSize(sizee)}
                className={`${
                  size === sizee ? "selected" : ""
                } bg-slate-100 rounded-lg text-base md:text-xl w-10 h-10 flex justify-center items-center cursor-pointer p-1`}
              >
                {sizee}
              </span>
            ))}
          </div>
          <button
            onClick={() => addToCart(selectedProduct._id, size)}
            className="py-4 px-6 active:bg-slate-600  bg-black text-white w-40 md:w-60"
          >
            ADD TO CART
          </button>
          <div className="text-gray-400">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Dummy Description & Reviews */}
      <div>
        <div className="mt-4 flex">
          <p className="h-13 border-2 p-2 sm:p-4 font-bold">Description</p>
          <p className="h-13 border-2 p-2 sm:p-4">Reviews (122)</p>
        </div>
        <p className="p-4 border-2">
          An e-commerce website is an online platform where businesses can sell
          products or services directly to consumers over the internet. These
          websites allow customers to browse through a catalog of items, add
          their desired products to a shopping cart, and complete their purchase
          through a secure payment system. E-commerce websites can cater to a
          variety of business models, including B2C (business-to-consumer), B2B
          (business-to-business), C2C (consumer-to-consumer, like eBay), and
          more. Popular examples of e-commerce websites include Amazon, eBay,
          and Shopify stores.
          <br></br>
          <br></br>
          E-commerce websites can cater to a variety of business models,
          including B2C (business-to-consumer), B2B (business-to-business), C2C
          (consumer-to-consumer, like eBay), and more. Popular examples of
          e-commerce websites include Amazon, eBay, and Shopify stores.
        </p>
      </div>

      {/* Relatect Products */}
      <div>
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <RelatedProducts
          category={selectedProduct.category}
          subCategory={selectedProduct.subCategory}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Product;
