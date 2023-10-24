import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bycrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
