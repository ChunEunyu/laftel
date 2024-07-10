import { getItemById } from "../services/itemService.js";

export const fetchItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getItemById(id);

        if (!result) {
            return res.status(404).send("Not found");
        }
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        res.status(500).json({ error: error.message });
    }
};