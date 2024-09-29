import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using Cash on Delivery (COD) Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const order = await orderModel.create({
      userId: userId.id,
      items,
      amount,
      address: JSON.stringify(address),
      paymentMethod: "COD",
      payment: "COD",
      date: Date(),
    });
    const orderSent = await orderModel.create(order);
    await orderSent.save();

    let test = await userModel.findByIdAndUpdate(userId.id, { cartData: {} });
    res
      .status(201)
      .json({ success: true, message: "Orders Placed Successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Placing Orders using Stripe Method
const placeOrderStripe = async (req, res) => {
  try {
  } catch (error) {}
};
// Placing Orders using Razorpay Method

const placeOrderRazorpay = async (req, res) => {
  try {
  } catch (error) {}
};

//All orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
  } catch (error) {}
};

// User Order Data for Frontend
const userOrders = async (req, res) => {
  try {
  } catch (error) {}
};
// Update Status from admin
const updateStatus = async (req, res) => {
  try {
  } catch (error) {}
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
