import { getAllDaily, getDailyByDay } from "../services/dailyService.js";

export const fetchAllDaily = async (req, res) => {
    try {
        const results = await getAllDaily();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchDailyByDay = async (req, res) => {
    try {
        const day = req.params.day;
        const results = await getDailyByDay(day);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};