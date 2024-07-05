import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// 모든 테마 가져오기
router.get("/", async (req, res) => {
    let collection = await db.collection("recommends-themes");
    let results = await collection.aggregate([{ $sample: { size: 33 } }]).toArray();
    res.send(results).status(200);
});

// 테마 id를 통해 특정 테마 가져오기
router.get("/:id", async (req, res) => {
    try {
        let collection = await db.collection("recommends-themes");

        let id = parseInt(req.params.id, 10);
        let query = { "id" : id }; 
        
        let result = await collection.findOne(query);

        if (!result) {
            res.status(404).send("Not found");
        } else {
            res.status(200).send(result);
        }
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;