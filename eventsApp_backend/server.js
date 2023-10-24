import express from "express";
import eventsRouter from "./routes/eventRouts.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.send("API is runnning");
});

app.use("/api/events", eventsRouter);
app.use("/api/users", userRouter);

app.listen(port);
