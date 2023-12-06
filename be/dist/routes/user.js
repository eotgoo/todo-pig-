"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const router = (0, express_1.Router)();
router.route("/").get(user_1.getUsers).post(user_1.createUser);
router.route("/:name").get(user_1.getUser);
exports.default = router;
