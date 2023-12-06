import { Request, Response, NextFunction } from "express";
import User from "../model/user";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.query;
    const user = await User.find({ name: name });
    res
      .status(201)
      .json({ success: true, message: "user мэдээлэл олдлоо.", user });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const date = new Date();

    if (!name) {
      res.status(400).json({
        success: false,
        message: "name field required",
      });
    } else {
      const user = await User.create({ name, registeredDate: date });
      console.log("hellllooooo", user);
      res.status(201).json({
        success: true,
        message: "Successfully created user",
        user,
      });
    }
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // Duplicate key (name) error
      return res.status(400).json({
        success: false,
        message: `User with name '${error.keyValue.name}' already exists`,
        duplicate: true,
      });
    } else {
      next(error);
    }
  }
};

export { getUsers, getUser, createUser };
