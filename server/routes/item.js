import express from "express";

import { fetchItemById, fetchRelatedItemById, fetchItemReview } from "../controller/itemController.js";

const router = express.Router();

router.get("/:id", fetchItemById);
router.get("/:id/related", fetchRelatedItemById);
router.get("/:id/reviews", fetchItemReview);

export default router;