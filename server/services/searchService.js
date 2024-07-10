import db from "../db/connection.js";

export const searchItems = async (keyword, viewingAll) => {
    try {
        // 기본 필터 설정
        let filter = {
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { genres: { $in: [keyword] } }
            ]
        };

        // 감상 가능한 작품 필터 추가
        if (!viewingAll) {
            filter.is_viewing = true;
        }

        const collection = await db.collection("items");
        return await collection.find(filter).toArray();
    } catch (error) {
        throw new Error("Error searching items: " + error.message);
    }
};
