"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const error_1 = __importDefault(require("./middlewares/error"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
// Importing variables from .env
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;
// Routes
app.use("/users", user_1.default);
// Middlewares
app.use((0, cors_1.default)());
// 8000 response
app.get("/", (req, res) => {
    res.send("Hello Todo Backend is live");
});
app.use(error_1.default);
(0, db_1.default)(MONGO_URI);
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
