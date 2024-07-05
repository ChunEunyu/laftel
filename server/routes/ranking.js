import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// 애니메이션 인기 순위
router.get("/", async (req, res) => {
    try {
        const type = req.query.type;
        let collection;

        if (type === "4hour") { // 실시간 랭킹
            collection = await db.collection("ranking-4hour");

        } else if (type === "week") { // 이번주 랭킹
            collection = await db.collection("ranking-week");

        } else if (type === "quarter") { // 이번 분기 랭킹
            collection = await db.collection("ranking-quarter");

        } else if (type === "history") { // 역대 랭킹
            collection = await db.collection("ranking-history");

        } else {
            return res.status(400).send("Invalid type parameter");

        }

        let results = await collection.find({}).toArray();
        res.status(200).send(results);
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching records");
    }
});

export default router;