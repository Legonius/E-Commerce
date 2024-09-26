import express, { json, urlencoded } from "express";
import "dotenv/config.js";
import { connectDB } from "./config/mongodb.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

const app = express();
const uri = process.env.MONGO_DATA_URI1;
const port = Number(process.env.PORT) || 15000;

connectDB(uri);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
