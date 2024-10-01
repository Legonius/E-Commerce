import React from "react";
import { backendUrl } from "../App";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import OrdersDisplay from "../components/OrdersDisplay";

const Orders = ({ token }) => {
  const [allOrders, setAllOrders] = useState([]);
  const getOrders = async () => {
    let fetch = await axios.get(`${backendUrl}/api/order/list`, {
      headers: { token },
    });
    setAllOrders(fetch.data.message);
  };
  useEffect(() => {
    getOrders();
  }, [token]);
  return (
    <div className="w-full px-8 py-4">
      <h1 className="text-xl mb-8">Order Page</h1>
      <div className="flex flex-col gap-8 text-gray-600">
        {allOrders?.map((item, index) => (
          <OrdersDisplay key={index} data={item} token={token} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
