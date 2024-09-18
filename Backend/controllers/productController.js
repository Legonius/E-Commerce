import { uploadImage, deleteImage } from "../config/imagekit.js";
import productModel from "../models/productModel.js";

// Adding a product
const addProduct = async (req, res) => {
  const { name, description, price, sizes, bestseller, category, subCategory } =
    req.body;

  const image1 = req.files?.image1 && req.files.image1[0];
  const image2 = req.files?.image2 && req.files.image2[0];
  const image3 = req.files?.image3 && req.files.image3[0];
  const image4 = req.files?.image4 && req.files.image4[0];

  const images = [image1, image2, image3, image4].filter(
    (item) => item !== undefined
  );
  try {
    const imageUrl = await Promise.all(
      images.map(async (img) => {
        let result = await uploadImage(img.path, img.originalname);
        return result;
      })
    );

    const newProduct = await new productModel({
      name,
      description,
      price: Number(price),
      image: imageUrl,
      sizes,
      bestseller: bestseller === true ? true : false,
      category,
      subCategory,
    });

    const data = await newProduct.save();

    res
      .status(201)
      .json({ success: true, message: "Product Added Succesfully" });
  } catch (error) {
    console.log("err:", error);
    res.status(406).json({ success: false, message: error.message });
  }
};

// Remove a Product
const removeProduct = async (req, res) => {
  const { id } = req.body;
  try {
    // const product = await productModel.findById(id);
    // if (!product) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Wrong Credential" });
    // }
    // console.log(product.image);
    // await deleteImage(product.image[3].url);

    const delProduct = await productModel.findByIdAndDelete(id);
    if (!delProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Wrong Credential" });
    }
    res
      .status(202)
      .json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Find a Product
const oneProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const findProduct = await productModel.findById(id);
    if (!findProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Wrong Credential" });
    }
    res.status(202).json({ success: true, message: findProduct });
  } catch (error) {
    console.log("err:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Product List
const productList = async (req, res) => {
  try {
    const findProductList = await productModel.find({});
    if (!findProductList) {
      return res
        .status(404)
        .json({ success: false, message: "Wrong Credential" });
    }
    res.status(202).json({ success: true, message: findProductList });
  } catch (error) {
    console.log("err:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export { addProduct, removeProduct, oneProduct, productList };