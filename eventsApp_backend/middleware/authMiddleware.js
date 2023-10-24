import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    const decode = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = await User.findById(decode.userId).select("-password");
    console.log(req.user);
    next();
  }
});

const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    throw new Error("Not Authoriized");
  }
});

export { protect, admin };
