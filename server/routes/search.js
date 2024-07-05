import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const keyword = req.query.keyword; // 검색 키워드
    const viewingAll = req.query.is_viewing === 'false'; // 감상 가능한 작품 필터

    // 입력값이 없으면 빈 배열을 반환
    if (!keyword) {
        return res.status(400).send([]);
    }

    // 기본 필터
    let filter = {
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { genres: { $in: [keyword] } }
        ]
    };

    // 감상 가능한 작품만 결과에 포함
    if (!viewingAll) {
        filter.is_viewing = true;
    }

    try {
        let collection = await db.collection("discover");
        let results = await collection.find(filter).toArray(); 
        res.status(200).send(results);

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'An error occurred' });
    } 
    
});

export default router;