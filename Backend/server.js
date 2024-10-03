import express, { json, urlencoded } from "express";
import "dotenv/config.js";
import { connectDB } from "./config/mongodb.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
const uri = process.env.MONGO_DATA_URI1;
const port = process.env.PORT || 15000;

connectDB(uri);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//Routes end points
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

export default app;
