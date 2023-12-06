import { Request, Response, NextFunction } from "express";

const error = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log("Error handler", error.name);

  res
    .status(error.statusCode || 400)
    .json({ message: error.message || "error" });
};

export default error;
