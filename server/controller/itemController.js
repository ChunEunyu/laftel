import { getItemById, getRelatedById } from "../services/itemService.js";

// 애니메이션 id로 애니메이션 정보 불러오기
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

// 애니메이션 id로 비슷한 애니메이션 작품 정보 불러오기
export const fetchRelatedItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getRelatedById(id);

        if (!result) {
            return res.status(404).send("Not found");
        }
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        res.status(500).json({ error: error.message });
    }
};

// 애니메이션의 리뷰 리스트 불러오기
export const fetchItemReview = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getItemById(id);

        if (!result) {
            return res.status(404).send("Not found");
        }

        const reviews = result.review;

        res.status(200).json({ reviews: reviews });
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        res.status(500).json({ error: error.message });
    }
};
