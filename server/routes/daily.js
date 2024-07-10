import express from "express";
import { fetchAllDaily, fetchDailyByDay } from "../controller/dailyController.js";

const router = express.Router();

router.get("/", fetchAllDaily);
router.get("/:day", fetchDailyByDay);

export default router;