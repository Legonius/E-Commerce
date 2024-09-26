import userModel from "../models/userModel.js";

// Add Prodcuts Size and Quantity to Cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    if (!itemId || !size) {
      return res
        .status(401)
        .json({ success: false, message: "Prodetails needed!" });
    }
    const user = await userModel.findById(userId.id);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User Not Found" });
    }
    let cartData = await user.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    const addItem = await userModel.findByIdAndUpdate(userId.id, { cartData });
    if (addItem) {
      res.status(201).json({ success: true, message: "Added to Cart" });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

// Update Cart Details
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    if (!userId || !itemId || !size || !quantity) {
      return res
        .status(401)
        .json({ success: false, message: "Product details needed!" });
    }
    const user = await userModel.findById(userId.id);
    const cartData = await user.cartData;

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not Found" });
    }

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId.id, { cartData });
    res.status(202).json({ success: true, message: "Products Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Cart Details
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await userModel.findById(userId.id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not Found" });
    }
    const cartData = user.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
