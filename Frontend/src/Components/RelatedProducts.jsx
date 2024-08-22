import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const findRelatedProducts = () => {
    let copyProducts = products.slice();
    let categorise = copyProducts.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    copyProducts = categorise.filter((item) =>
      item.subCategory.toLowerCase().includes(subCategory.toLowerCase())
    );
    let allCategorise = [...copyProducts, ...categorise];
    setRelatedProducts(allCategorise.slice(0, 5));
  };
  useEffect(() => {
    findRelatedProducts();
  }, [category, subCategory]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mt-6 sm:mt-10">
      {relatedProducts.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
    </div>
  );
};

export default RelatedProducts;
