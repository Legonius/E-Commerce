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
      address: address,
      paymentMethod: "COD",
      date: Date.now(),
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
    const orders = await orderModel.find({});
    res.status(200).json({ success: true, message: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// User Order Data for Frontend
const userOrders = async (req, res) => {
  try {
  } catch (error) {}
};
// Update Status from admin
const updateStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    const update = await orderModel.findByIdAndUpdate(id, { status });
    res.status(200).json({ success: true, message: update });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
