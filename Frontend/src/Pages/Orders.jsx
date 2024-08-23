import React, { useContext } from "react";
import Title from "../Components/Title";
import { shopContext } from "../Context/ShopContext";

const Orders = () => {
  const { currency, products } = useContext(shopContext);
  return (
    <div className=" pt-10 border-t-2">
      <Title text1={"MY"} text2={"ORDERS"} />
      <div className="flex flex-col">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between my-4 border-y py-2 items-center text-gray-500"
          >
            <div className="flex flex-shrink-0 flex-1 gap-2">
              <div>
                <img className="w-20" src={item.image[0]} />
              </div>
              <div className="flex flex-col justify-between">
                <p>{item.name}</p>
                <p>
                  {currency} {item.price} {"Quantity: 1"} {item.sizes[0]}
                </p>
                <p>Date: 25 Jul 2024</p>
              </div>
            </div>
            <div className="flex w-full flex-1 justify-around sm:justify-between items-center ">
              <div className="flex  gap-2 items-center justify-center">
                <p
                  className={`h-4 w-4 border-2 rounded-full  shrink-0 bg-green-500`}
                ></p>
                <p>Ready to ship</p>
              </div>
              <div className="flex items-center justify-end ">
                <button className="py-2 px-4 border-2 rounded-lg hover:bg-gray-200 hover:text-green-400 hover:border-green-400">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
