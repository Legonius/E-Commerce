import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKENT_URL;
export const shopContext = createContext();

const getProducts = async (setData) => {
  let url = import.meta.env.VITE_BACKENT_URL;
  console.log(url);
  let response = await axios.get(`${url}/api/product/list-product`);
  console.log(response);
  if (response.data.success) {
    setData(response.data.message);
  } else {
    toast.error(response.data.message);
  }
};

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    getProducts(setProducts);
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getCart(localStorage.getItem("token"));
    }
    getCartCount();
  }, []);

  const getCart = async (string) => {
    const cartData = await axios.get(`${backendURL}/api/cart/get-cart`, {
      headers: { token: string },
    });
    setCartItems(cartData.data.cartData);
  };
  const addToCart = async (id, size) => {
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
    await axios.post(
      `${backendURL}/api/cart/add-cart`,
      { itemId: id, size },
      { headers: { token } }
    );
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        totalCount += Number(cartItems[items][item]);
      }
    }
    return totalCount;
  };

  const updateQuantity = async (id, size, quantity) => {
    let quantities = Number(quantity);
    const copyCart = structuredClone(cartItems);
    copyCart[id][size] = Number(quantity);
    setCartItems(copyCart);
    await axios.patch(
      `${backendURL}/api/cart/update-cart`,
      { itemId: id, size, quantity: quantities },
      { headers: { token } }
    );
  };

  const cartTotalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let eachItem = products.find((x) => x._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += eachItem?.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
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
    setCartItems,
    updateQuantity,
    cartTotalAmount,
    token,
    setToken,
    getCart,
  };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
