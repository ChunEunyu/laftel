import express from "express";
import { fetchItemById } from "../controller/itemController.js";

const router = express.Router();

router.get("/:id", fetchItemById);

export default router;