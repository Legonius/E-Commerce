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
const loginUser = async (req, res) => {};

// controller for user register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.json({ success: false, message: "Invalid Email" });
  }
  const exist = await userModel.findOne({
    email: email,
  });
  if (exist) {
    return res.json({ success: false, message: "User already exists." });
  }
  if (password.length < 8) {
    return res.json({
      success: false,
      message: "Please enter Strong Password",
    });
  }
  const genSalt = await bcryptjs.genSalt();
  const hashPassword = await bcryptjs.hash(password, genSalt);

  const register = new userModel({
    name,
    email,
    password: hashPassword,
  });
  const newUser = await register.save();
  const token = makeToken(newUser._id);
  res.json({ success: true, message: token });
};

// controller for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
