import React, { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const shopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [cartItems, setCartItems] = useState({});
  const addToCart = (id, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("Please Select Size");
      return;
    }
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        totalCount += cartItems[items][item];
      }
    }
    return totalCount;
  };

  const updateQuantity = (id, size, quantity) => {
    const copyCart = structuredClone(cartItems);
    copyCart[id][size] = Number(quantity);
    setCartItems(copyCart);
  };

  const value = {
    products,
    currency,
    deliveryFee,
    showSearch,
    setShowSearch,
    searchProduct,
    setSearchProduct,
    addToCart,
    getCartCount,
    cartItems,
    updateQuantity,
  };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
