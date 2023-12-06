import express, { Router } from "express";
import { getUsers, getUser, createUser } from "../controller/user";

const router = Router();

router.route("/").get(getUsers).post(createUser);
router.route("/user").get(getUser);

export default router;
