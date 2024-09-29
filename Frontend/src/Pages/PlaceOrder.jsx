import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const backendURL = import.meta.env.VITE_BACKENT_URL;
  const { cartTotalAmount, cartItems, setCartItems, deliveryFee, token } =
    useContext(shopContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let allItems = structuredClone(cartItems);
    let itemsData = {};
    for (let items in allItems) {
      for (let item in allItems[items]) {
        if (allItems[items][item] > 0) {
          itemsData[items] = [item];
          itemsData[items][item] = allItems[items][item];
        }
      }
    }
    let amount = deliveryFee + cartTotalAmount();
    let dataInfo = {
      address: formData,
      items: itemsData,
      amount,
    };

    const placeOrder = await axios.post(
      `${backendURL}/api/order/place`,
      dataInfo,
      {
        headers: { token },
      }
    );
    if (placeOrder.data.success) {
      setCartItems({});
      toast.success(placeOrder.data.message);
      navigate("/orders");
    } else {
      toast.warn(placeOrder.data.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row border-t-2 sm:pt-20 gap-8"
    >
      {/* left side */}
      <div className="flex-1">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <div className="w-full mt-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              name="firstName"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="First name"
              required
            />
            <input
              onChange={handleInput}
              name="lastName"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              name="email"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="email"
              placeholder="Email address"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              name="street"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Street"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              name="city"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="City"
              required
            />
            <input
              onChange={handleInput}
              name="state"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              name="zipcode"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Zipcode"
              required
            />
            <input
              onChange={handleInput}
              name="country"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              onChange={handleInput}
              name="phone"
              className="px-2 border-2 outline-none h-10 flex-1"
              type="text"
              placeholder="Phone"
              required
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
          <input
            type="submit"
            value="Place Order"
            className=" px-10 py-3 text-sm text-white bg-black cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
