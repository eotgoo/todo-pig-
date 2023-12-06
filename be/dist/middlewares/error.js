"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (error, req, res, next) => {
    console.log("Error handler", error.name);
    res
        .status(error.statusCode || 400)
        .json({ message: error.message || "error" });
};
exports.default = error;
