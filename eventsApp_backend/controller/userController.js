import { log } from "console";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.js";
import bycrypt from "bcryptjs";
import createToken from "../util/createToken.js";

const authUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.find({ username });

  if (user && (await user.comparePasswords(password))) {
    res.json(user);
  } else {
    res.status(404);
    res.send("Username or password is invalid");
  }
});

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, username, password } = req.body;

  const sameUser = await User.findOne({ username });

  if (sameUser) {
    res.send("This username already exist");
  } else {
    const user = await User.create({
      name,
      email,
      username,
      password: bycrypt.hashSync(password),
      isAdmin: false,
    });

    if (user) {
      createToken(res, user._id);
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Something went wrong. Please try again later");
    }
  }
});

export { authUser, registerUser };
