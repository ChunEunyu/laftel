import express from "express";
import { fetchSearchResults } from "../controller/searchController.js";

const router = express.Router();

router.get("/", fetchSearchResults);

export default router;