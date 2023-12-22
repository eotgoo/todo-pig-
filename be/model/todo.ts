import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  task: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const todo = model("Todo", todoSchema);

export default todo;
