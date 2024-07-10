import { searchItems } from "../services/searchService.js";

export const fetchSearchResults = async (req, res) => {
    const keyword = req.query.keyword; // 검색 키워드
    const viewingAll = req.query.viewing_only === 'false'; // 감상 가능한 작품 필터

    // 입력값이 없으면 빈 배열을 반환
    if (!keyword) {
        return res.status(400).json([]);
    }

    try {
        const results = await searchItems(keyword, viewingAll);
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ error: 'An error occurred' });
    }
};
