import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.route("/").post(registerUser);
userRouter.post("/auth", authUser);
userRouter.post("/logout", logoutUser);

export default userRouter;
