import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose Connected");
  } catch (error) {
    console.log("Mongoose not Connected");
    console.log(error.message);
  }
};

export default connectDb;
