import express from "express";
import authUser from "../middleware/auth.js";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

// '/api/cart
cartRouter.post("/add-cart", authUser, addToCart);
cartRouter.patch("/update-cart", authUser, updateCart);
cartRouter.get("/get-cart", authUser, getUserCart);

cartRouter.get("/", authUser, (req, res) => {
  res.status(200).json({ success: true, message: "API working well." });
});

export default cartRouter;
