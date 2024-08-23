import React, { useContext } from "react";
import Title from "./Title";
import { shopContext } from "../Context/ShopContext";

const CartTotal = () => {
  const { currency, cartTotalAmount, deliveryFee } = useContext(shopContext);
  return (
    <div className="w-full ">
      <Title text1={"CART"} text2={"TOTALS"} />
      <div className="mt-5 flex flex-col gap-3 sm:gap-4">
        <div className="flex justify-between text-slate-500">
          <span>Subtotal</span>
          <p>
            {currency} {cartTotalAmount()}.00
          </p>
        </div>
        <div className="flex justify-between text-slate-500">
          <p>Shipping Fee</p>
          <p>
            {currency} {cartTotalAmount() === 0 ? "0" : deliveryFee}.00
          </p>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <p>
            {currency}{" "}
            {cartTotalAmount() === 0 ? "0" : cartTotalAmount() + deliveryFee}
            .00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
