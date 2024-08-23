import React, { useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  return (
    <div className="flex flex-col md:flex-row border-t-2 sm:pt-20 gap-8">
      {/* left side */}
      <div className="flex-1">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <div className="w-full mt-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="First name"
            />
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Street"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="City"
            />
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Zipcode"
            />
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Country"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
      {/* {Right side ======} */}
      <div className="flex-1 flex flex-col gap-8">
        <div className="w-full ">
          <CartTotal />
        </div>
        <div className="flex flex-col gap-4">
          <Title text1={"PAYMENT"} text2={"METHOD"} font={"small"} />
          <div className="grid grid-cols-3 gap-1">
            <div
              onClick={() => setPaymentMethod("stripe")}
              className="cursor-pointer flex flex-1 gap-2 border-2 px-4 py-3  justify-center items-center"
            >
              <p
                className={`h-4 w-4 border-2 shrink-0 rounded-full ${
                  paymentMethod === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img className="h-6" src={assets.stripe_logo} alt="img" />
            </div>
            <div
              onClick={() => setPaymentMethod("rzp")}
              className="cursor-pointer flex flex-1 gap-2 border-2 px-4 py-3  justify-center items-center"
            >
              <p
                className={`h-4 w-4 shrink-0 border-2 rounded-full ${
                  paymentMethod === "rzp" ? "bg-green-500" : ""
                }`}
              ></p>
              <img
                className="h-6 flex-shrink"
                src={assets.razorpay_logo}
                alt="img"
              />
            </div>
            <div
              onClick={() => setPaymentMethod("cod")}
              className="cursor-pointer flex flex-1 gap-2 border-2 px-4 py-3  justify-center items-center"
            >
              <p
                className={`h-4 w-4 border-2 rounded-full  shrink-0 ${
                  paymentMethod === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-xs text-gray-400">CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/orders")}
            className=" px-10 py-3 text-sm text-white bg-black cursor-pointer"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
