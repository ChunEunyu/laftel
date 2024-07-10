import db from "../db/connection.js";

export const getDiscoverCategories = async () => {
    try {
        const collection = await db.collection("info-discover");
        return await collection.find({}).toArray();
    } catch (error) {
        throw new Error("Error fetching discover categories from database: " + error.message);
    }
};