import mongoose from "mongoose";
import moongose from "mongoose";

const orderSchema = new moongose.Schema(
  {
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, required: true, default: "Order Placed" },
    paymentMethod: { type: String, required: true },
    payment: { type: String, required: true, default: false },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);
export default orderModel;
