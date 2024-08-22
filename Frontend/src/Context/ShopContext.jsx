import React, { createContext, useState } from "react";
import { products } from "../assets/assets";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const value = {
    products,
    currency,
    deliveryFee,
    showSearch,
    setShowSearch,
    searchProduct,
    setSearchProduct,
  };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
