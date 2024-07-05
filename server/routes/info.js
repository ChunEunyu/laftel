import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// 테마 검색 페이지 카테고리 데이터 불러오기
router.get("/discover", async (req, res) => {
    let collection = await db.collection("info-discover");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


export default router;