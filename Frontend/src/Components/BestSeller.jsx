import React, { useContext } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { shopContext } from "../Context/ShopContext";
import ShimmerCard from "./ShimmerCard";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const dummyArray = "01234";
  return (
    <div className="mt-8 mb-8 text-slate-600">
      <Title text1={"BEST"} text2={"SELLER"} />
      <p className="w-3/4 text-sx sm:text-sm md:text-base text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        veritatis facilis error aut repellat.
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {products.length > 0
          ? products
              .filter((x) => x.bestseller)
              .slice(0, 5)
              .map((item, index) => <ProductItem key={index} item={item} />)
          : dummyArray.split("").map((s, idx) => <ShimmerCard key={s + idx} />)}
      </div>
    </div>
  );
};

export default BestSeller;
