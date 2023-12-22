import express, { Router } from "express";
import { generateImage } from "../controller/openAi";

const router = Router();

router.route("/").post(generateImage);

export default router;
