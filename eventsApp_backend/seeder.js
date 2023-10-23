import dotenv from "dotenv";
import connectDb from "./config/db.js";
import mongoose from "mongoose";
import events from "./data/events.js";
import Event from "./models/event.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await mongoose.model("Event").deleteMany();
    await mongoose.model("Event").insertMany(events);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log("Data not Imported!");
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
} else {
  importData();
}
