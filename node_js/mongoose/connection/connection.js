// db.js
import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/Inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("connected to mongo")
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
   
  }
};

export default connectToMongo;
