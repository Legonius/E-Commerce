import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const OrdersDisplay = ({ data, token }) => {
  console.log(data);
  const [status, setStatus] = useState(data.status || "Order Placed");

  const updateStatus = async (e) => {
    const oldValue = status;
    const newValue = e.target.value;

    setStatus(newValue);
    if (newValue) {
      try {
        const update = await axios.patch(
          `${backendUrl}/api/order/status`,
          { id: data._id, status: newValue },
          { headers: { token } }
        );
        if (update.data.success) {
          toast.success("Status Updated");
        } else {
          setStatus(oldValue);
        }
      } catch (error) {
        toast.error(error.message);
        setStatus(oldValue);
      }
    }
  };

  return (
    <div
      className={`flex justify-between flex-wrap border-2 p-4 ${
        status === "Delivered" ? "hover:bg-green-300" : "hover:bg-slate-100"
      } ${status === "Delivered" ? "bg-green-200" : ""}`}
    >
      <div className="py-3">
        <img className="w-20 sm:w-30" src={assets.parcel_icon} alt="imge" />
        <p>
          {data.address.firstName} {data.address.lastName}
        </p>
      </div>
      <div className="py-3">
        <div>
          <div>
            {data.items.map((item, index) => (
              <p key={index}>
                {item.name} x {item.quantity} - {item.size}
              </p>
            ))}
            <address className="mt-2">
              <p>
                Address: {data.address.street}, {data.address.city}
              </p>
              <p>
                Country: {data.address.country}, {data.address.zipcode}
              </p>
              <p>Phone: {data.address.phone}</p>
            </address>
          </div>
        </div>
      </div>
      <div className="py-3">
        <p className="mb-2">
          {"Items: "}
          {data.items.map((item) => item.quantity).reduce((a, b) => a + b)}
        </p>
        <p>
          {"Method: "}
          {data.paymentMethod}
        </p>
        <p>
          {"Payment: "}
          {data.payment ? "Paid" : "Pending"}
        </p>
      </div>
      <div className="py-3">
        {data.items[0].currency}
        {data.amount}
      </div>
      <div className="py-3 flex flex-col gap-3 justify-between">
        <select
          onChange={(e) => updateStatus(e)}
          value={status}
          className="px-3 py-2 border-2 font-semibold outline-none"
        >
          <option value="Order Placed">Order Placed</option>
          <option value="Packing">Packing</option>
          <option value="Shipped">Shipped</option>
          <option value="Out for delivery">Out for delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
        <p>
          Ordered Date:<br></br>{" "}
          {new Date(Number(data.date)).toLocaleDateString()}{" "}
        </p>
      </div>
    </div>
  );
};

export default OrdersDisplay;
