import { getAllThemes, getThemeById } from "../services/themesService.js";
export const fetchAllThemes = async (req, res) => {
    try {
        const results = await getAllThemes();
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching all themes:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const fetchThemeById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getThemeById(id);

        if (!result) {
            res.status(404).json({ error: "Not found" });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error fetching theme by ID:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
