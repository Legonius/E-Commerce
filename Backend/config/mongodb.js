import mongoose from "mongoose";

export const connectDB = async (url) => {
  await mongoose
    .connect(`${url}/e-commerce`)
    .then(() => console.log("MongoDB Connected..."));
};
