import { getItems, itemsFilter } from "../services/discoverService.js";

export const fetchItems = async (req, res) => {
    try {
        const filter = itemsFilter(req.query);
        const results = await getItems(filter);
        console.log(results.length)
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ error: error.message });
    }
};