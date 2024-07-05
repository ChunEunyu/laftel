import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// 매번 데이터를 가져올 때마다 순서가 섞인 상태로 가져오기
router.get("/", async (req, res) => {
    let collection = await db.collection("carousels");
    let results = await collection.aggregate([{ $sample: { size: await collection.countDocuments() } }]).toArray();
    res.send(results).status(200);
});

export default router;