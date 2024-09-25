import { useContext } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { shopContext } from "../Context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(shopContext);
  return (
    <div className="mt-8 mb-8 text-slate-600">
      <Title text1={"LATEST"} text2={"COLLECTIONS"} />
      <p className="w-3/4 text-sx sm:text-sm md:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aut
        cumque ratione ut quo magnam facere ad veniam adipisci! Beatae atque
        magnam saepe amet sequi ullam non dignissimos? Odit, laboriosam?
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {products.slice(0, 10).map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
