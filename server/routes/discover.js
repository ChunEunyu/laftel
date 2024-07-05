import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// 모든 애니메이션 불러오기
router.get("/", async (req, res) => {
    let collection = await db.collection("discover");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


export default router;