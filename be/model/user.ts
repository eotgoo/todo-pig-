import { Schema, model } from "mongoose";

interface IUser {}

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  registeredDate: {
    type: Date,
    default: new Date(),
  },
});

const user = model("User", userSchema);

export default user;
