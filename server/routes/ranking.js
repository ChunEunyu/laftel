import express from "express";
import { fetchRankingData } from "../controller/rankingController.js";

const router = express.Router();

router.get("/", fetchRankingData);

export default router;