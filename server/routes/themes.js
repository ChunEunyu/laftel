import express from "express";
import { fetchAllThemes, fetchThemeById } from "../controller/themesController.js";

const router = express.Router();

router.get("/", fetchAllThemes);
router.get("/:id", fetchThemeById);

export default router;