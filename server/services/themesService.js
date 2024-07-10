import db from "../db/connection.js";

// 모든 테마 가져오기
export const getAllThemes = async () => {
    try {
        const collection = await db.collection("recommends-themes");
        return await collection.aggregate([{ $sample: { size: 33 } }]).toArray();
    } catch (error) {
        throw new Error("Error fetching themes: " + error.message);
    }
};

// id로 특정 테마 가져오기
export const getThemeById = async (id) => {
    try {
        const collection = await db.collection("recommends-themes");
        return await collection.findOne({ id: parseInt(id, 10) });
    } catch (error) {
        throw new Error("Error fetching theme by ID: " + error.message);
    }
};
