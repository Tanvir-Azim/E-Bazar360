//const mongoose = require('mongoose');
import mongoose from "mongoose";

const db = "mongodb+srv://Ecommerce:4zKhCT9nFEJyopFg@ecommercecluster.qu3t0qx.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1); 
  }
};

export default connectDB
