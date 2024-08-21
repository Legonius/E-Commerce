import React, { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { currency } = useContext(shopContext);
  const { _id, name, price, image } = item;

  return (
    <Link
      to={`/collection/${_id}`}
      className="text-slate-500 flex flex-col overflow-hidden"
    >
      <img
        className="hover:scale-110 transition ease-in-out"
        src={image[0]}
        alt="Image"
      />
      <span>{name}</span>
      <span>
        {currency}
        {price}
      </span>
    </Link>
  );
};

export default ProductItem;
