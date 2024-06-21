import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();


const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectToMongo;
