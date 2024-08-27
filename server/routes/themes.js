import express from "express";
import { fetchAllThemes, fetchThemeById, fetchThemesBySize } from "../controller/themesController.js";

const router = express.Router();

router.get("/", fetchAllThemes);
router.get("/:id", fetchThemeById);
router.get("/size/:size", fetchThemesBySize);

export default router;