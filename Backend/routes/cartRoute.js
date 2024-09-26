import express from "express";
import authUser from "../middleware/auth";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController";

const cartRouter = express.Router();

// '/api/cart
cartRouter.post("/add-cart", authUser, addToCart);
cartRouter.patch("/update-cart", authUser, updateCart);
cartRouter.get("/get-cart", authUser, getUserCart);

cartRouter.get("/", (req, res) => {
  res.state(200).json({ success: true, message: "API working good." });
});

export default cartRouter;
