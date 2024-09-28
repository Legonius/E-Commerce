import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRoute = express.Router();

// /api/order

// Admin Features
orderRoute.get("/list", adminAuth, allOrders);
orderRoute.post("/status", adminAuth, updateStatus);

// Payment Features
orderRoute.post("/place", authUser, placeOrder);
orderRoute.post("/stripe", authUser, placeOrderStripe);
orderRoute.post("/razorpay", authUser, placeOrderRazorpay);

// User Features
orderRoute.get("/user-ordered", authUser, userOrders);

export default orderRoute;
