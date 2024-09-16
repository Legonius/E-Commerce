import express from "express";
import {
  addProduct,
  oneProduct,
  productList,
  removeProduct,
} from "../controllers/productController.js";
import { upload } from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add-product",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove-product", removeProduct);
productRouter.get("/get-product", oneProduct);
productRouter.get("/list-product", productList);

export default productRouter;
