"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    registeredDate: {
        type: Date,
    },
});
const user = (0, mongoose_1.model)("User", userSchema);
exports.default = user;
