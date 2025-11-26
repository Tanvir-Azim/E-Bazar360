import express from "express";
import connectDB from "./Mongodb.js";
import router from "./Routes/userRoute.js";
import productRouter from "./Routes/productRoute.js";
import cartRouter from "./Routes/cartRoute.js";

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", router);
app.use("/api/product", productRouter);
app.use("/api/cart",cartRouter)

app.get("/", (req, res) => {
  res.send("hei hello");
});

app.listen(8000, () => {
  console.log("surver ranning");
});
