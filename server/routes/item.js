import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// 애니메이션 id를 통해 애니메이션 상세 정보 가져오기
router.get("/:id", async (req, res) => {
    let collection = await db.collection("discover");

    let id = parseInt(req.params.id, 10);
    let query = { "id" : id }; 

    let result = await collection.findOne(query);

    if (!result) {
        return res.status(404).send("Not found");
    } else {
        return res.status(200).send(result);
    }
});

export default router;