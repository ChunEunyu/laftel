import { getRandomCarousels } from "../services/carouselsService.js";

export const fetchRandomCarousels = async (req, res) => {
    try {
        const results = await getRandomCarousels();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};