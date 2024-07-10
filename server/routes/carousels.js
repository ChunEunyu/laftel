import express from "express";
import { fetchRandomCarousels } from "../controller/carouselsController.js";

const router = express.Router();

router.get("/", fetchRandomCarousels);

export default router;