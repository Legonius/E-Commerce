import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Cart = () => {
  const { cartItems, products, currency, updateQuantity } =
    useContext(shopContext);
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setAllItems(tempData);
  }, [cartItems]);
  return (
    <div className="my-8">
      <Title text1={"YOUR"} text2={"CART"} />
      <div>
        {allItems.map((item, index) => {
          let eachItemDetail = products.find((x) => x._id === item._id);
          return (
            <div key={index} className="w-full  flex gap-4  py-8 border-b-2">
              <Link
                to={`/product/${eachItemDetail._id}`}
                className="w-1/4 sm:w-auto"
              >
                <img
                  className=" sm:h-20"
                  src={eachItemDetail.image[0]}
                  alt="image"
                />
              </Link>
              <div className="flex w-full flex-1 sm:items-center flex-col justify-center sm:flex-row sm:gap-3 sm:justify-between">
                <div className="flex-1">
                  <p className=" ">{eachItemDetail.name}</p>
                  <div className="flex gap-4">
                    <p>
                      <span className="text-gray-400">{currency}</span>
                      {eachItemDetail.price}
                    </p>
                    <p>
                      <span className="text-gray-400">Size -</span>{" "}
                      <span className="py-1 px-2 bg-slate-200">
                        {item.size}
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-gray-400 mr-4">Quantity</span>
                  <input
                    onChange={(e) =>
                      e.target.value === "0" || e.target.value === ""
                        ? null
                        : updateQuantity(item._id, item.size, e.target.value)
                    }
                    className="outline-none w-12"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className=" h-8 rounded-lg w-8 bg-red-200 p-2 hover:bg-red-500 cursor-pointer"
                  src={assets.bin_icon}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
