import db from "../db/connection.js";

export const getItemById = async (id) => {
    try {
        const collection = await db.collection("items");
        return await collection.findOne({ id: parseInt(id, 10) });
    } catch (error) {
        throw new Error("Error fetching item from database: " + error.message);
    }
};

export const getRelatedById = async (id) => {
    try {
        const collection = await db.collection("related");
        return await collection.findOne({ id: parseInt(id, 10) });
    } catch (error) {
        throw new Error("Error fetching item from database: " + error.message);
    }
};