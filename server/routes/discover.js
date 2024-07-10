import express from "express";
import { fetchItems } from "../controller/discoverController.js";

const router = express.Router();

router.get("/", fetchItems);

export default router;