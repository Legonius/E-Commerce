import express, { json, urlencoded } from "express";
import "dotenv/config.js";
import { connectDB } from "./config/mongodb.js";
import cors from "cors";
import imagekit from "./config/imagekit.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const uri = process.env.MONGO_DATA_URI;
const port = Number(process.env.PORT) || 15000;

connectDB(uri);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
