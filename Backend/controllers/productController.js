import uploadImage from "../config/imagekit.js";
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
const removeProduct = async (req, res) => {};

// Find a Product
const oneProduct = async (req, res) => {};

// Get Product List
const productList = async (req, res) => {};
export { addProduct, removeProduct, oneProduct, productList };
