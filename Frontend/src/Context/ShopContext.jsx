import React, { createContext } from "react";
import { products } from "../assets/assets";

const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const value = {
    products,
    currency,
    deliveryFee,
  };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
