import dotenv from "dotenv";
import Mongoose from "mongoose";
dotenv.config();
const connectToMongoDB = async () => {
  try {
    await Mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectToMongoDB;
