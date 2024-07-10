import express from "express";
import { fetchDiscoverCategories } from "../controller/infoController.js";

const router = express.Router();

router.get("/discover", fetchDiscoverCategories);


export default router;