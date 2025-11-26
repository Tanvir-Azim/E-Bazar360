import express from "express";
import addProduct from "../Controllers/productController.js";
import { getProduct } from "../Controllers/productController.js";
import { getProductById } from "../Controllers/productController.js";
import { updateProductById } from "../Controllers/productController.js";
import { deleteProductById } from "../Controllers/productController.js";

const productRouter = express.Router();
//find product
productRouter.post("/add", addProduct);
//get all product
productRouter.get("/all", getProduct);
//find product by id
productRouter.get("/:id", getProductById);
//update product by id
productRouter.put("/:id", updateProductById); //update korer jonno put method use kora hoy
//delete product by id
productRouter.delete("/:id", deleteProductById);
export default productRouter;
