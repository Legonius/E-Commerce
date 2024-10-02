import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { shopContext } from "../Context/ShopContext";
import axios from "axios";
import OrdersDetails from "../Components/OrdersDetails";

const Orders = () => {
  const { currency, token } = useContext(shopContext);
  const [tracked, setTracked] = useState(false);
  const [myOrders, setMyOrders] = useState([]);
  const getOrders = async () => {
    if (!tracked) {
      if (!token) return null;
      setTracked(true);
      const backendURL = import.meta.env.VITE_BACKENT_URL;
      const orders = await axios.get(`${backendURL}/api/order/user-ordered`, {
        headers: { token: token },
      });
      if (orders.data.success) {
        setMyOrders(orders.data.message);
        setTimeout(() => {
          setTracked(false);
        }, 1500);
      } else {
        setTracked(false);
      }
    }
  };
  useEffect(() => {
    getOrders();
  }, [token]);
  return (
    <div className=" pt-10 border-t-2">
      <Title text1={"MY"} text2={"ORDERS"} />
      <div className="flex flex-col">
        {myOrders.length > 0 &&
          myOrders.map((orders) =>
            orders.items.map((item, index) => (
              <OrdersDetails
                key={orders._id + index}
                item={item}
                gO={getOrders}
                currency={currency}
                orders={orders}
              />
            ))
          )}
      </div>
    </div>
  );
};

export default Orders;
