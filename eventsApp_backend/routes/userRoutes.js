import express from "express";
import { authUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/auth", authUser);
userRouter.route("/").post(registerUser);

export default userRouter;
