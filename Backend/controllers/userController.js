import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import "dotenv/config";

//Make token
const makeToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);
  return token;
};

// controller for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist!" });
    }
    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password is incorrect" });
    }
    const token = makeToken(user._id);
    res.status(202).json({ success: true, message: token });
  } catch (error) {
    console.log("err:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// controller for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }
    const exist = await userModel.findOne({
      email: email,
    });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter Strong Password",
      });
    }
    const salt = await bcryptjs.genSalt(11);
    const hashPassword = await bcryptjs.hash(password, salt);

    const register = new userModel({
      name,
      email,
      password: hashPassword,
    });
    const newUser = await register.save();
    const token = makeToken(newUser._id);
    res.status(201).json({ success: true, message: token });
  } catch (error) {
    console.log("err:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// controller for admin login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(email + password, process.env.JWT_SECRET);
    return res.status(202).json({ success: true, token });
  }
  res
    .status(403)
    .json({ success: false, message: "Not Authorize, login again" });
};

export { loginUser, registerUser, adminLogin };
