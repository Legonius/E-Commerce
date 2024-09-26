import express from "express";
import {
  adminLogin,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

// '/api/user'
userRouter.post("/user-login", loginUser);
userRouter.post("/register", registerUser);
userRouter.post("/admin-login", adminLogin);

export default userRouter;
