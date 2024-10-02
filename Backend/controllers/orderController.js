import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

//global variables

const currency = "USD";
const deliveryCharge = 2;

// Gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECCRET_KEY);

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

    await userModel.findByIdAndUpdate(userId.id, { cartData: {} });
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
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;
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

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${orderSent._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${orderSent._id}`,
      line_items,
      mode: "payment",
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Placing Orders using Razorpay Method

const placeOrderRazorpay = async (req, res) => {
  try {
    console.log("Hello Razorpay");
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
  const { userId } = req.body;
  try {
    const data = await orderModel.find({ userId: userId.id });

    if (data) {
      res.status(200).json({ success: true, message: data });
    }
  } catch (error) {}
  try {
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
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

// verify payments
const verifyPayment = async (req, res) => {
  try {
    const { success, orderId, userId } = req.body;
    console.log(userId);

    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {
        payment: true,
      });
      await userModel.findByIdAndUpdate(userId.id, {
        cartData: {},
      });

      res.json({ success: true, message: "Payment Successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment Cancel" });
    }
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
  verifyPayment,
};
