import express, { Router } from "express";
import {
  getTodosByUser,
  createTodo,
  editTodo,
  deleteTodo,
} from "../controller/todo";

const router = Router();

router
  .route("/")
  .get(getTodosByUser)
  .post(createTodo)
  .put(editTodo)
  .delete(deleteTodo);

export default router;
