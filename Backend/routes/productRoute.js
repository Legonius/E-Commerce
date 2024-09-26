import express from "express";
import {
  addProduct,
  oneProduct,
  productList,
  removeProduct,
} from "../controllers/productController.js";
import { upload } from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add-product",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// '/api/product'
productRouter.delete("/remove-product", adminAuth, removeProduct);
productRouter.get("/get-product", oneProduct);
productRouter.get("/list-product", productList);

export default productRouter;
