import express from "express";
import { authUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.route("/").post(registerUser);
userRouter.post("/auth", authUser);

export default userRouter;
