import { getDiscoverCategories } from "../services/infoService.js";

export const fetchDiscoverCategories = async (req, res) => {
    try {
        const results = await getDiscoverCategories();
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching discover categories:", error);
        res.status(500).json({ error: error.message });
    }
};