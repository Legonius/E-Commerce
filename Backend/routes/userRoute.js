import mongoose from "mongoose";
import {
  adminLogin,
  loginUser,
  registerUser,
} from "../controllers/userController";

const userRouter = mongoose.Route();

userRouter.post("/user-login", loginUser);
userRouter.post("/register", registerUser);
userRouter.post("/admin-login", adminLogin);

export default userRouter;
