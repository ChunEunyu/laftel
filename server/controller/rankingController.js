import { getRankingData } from "../services/rankingService.js";

export const fetchRankingData = async (req, res) => {
    try {
        const type = req.query.type;
        const results = await getRankingData(type);
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching ranking data:", error);
        if (error.message === "Invalid type parameter") {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("Error fetching records");
        }
    }
};