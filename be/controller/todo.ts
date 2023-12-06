import { Request, Response, NextFunction } from "express";
import Todo from "../model/todo";

const getTodosByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.query;
    const todos = await Todo.find({ name: name });
    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { task, name } = req.body;
    const date = new Date();

    if (!name || !task) {
      res.status(400).json({
        success: false,
        message: "name or text field required",
      });
    } else {
      const todo = await Todo.create({ name, task, createdDate: date });

      res.status(201).json({
        success: true,
        message: "Successfully created todo",
        todo,
      });
    }
  } catch (error: any) {
    next(error);
  }
};

const editTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { id, task, checked } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { $set: { task, checked } },
      { new: true }
    );
    res.status(200).json({ message: "todo Succesfully updated", todo });
  } catch (error) {
    next(error);
  }
};
const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.query;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "todo Succesfully deleted", todo });
  } catch (error) {
    next(error);
  }
};

export { getTodosByUser, createTodo, editTodo, deleteTodo };
