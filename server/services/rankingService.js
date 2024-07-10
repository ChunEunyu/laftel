import db from "../db/connection.js";

export const getRankingData = async (type) => {
    try {
        let collection;

        switch (type) {
            case "4hour":
                collection = await db.collection("ranking-4hour");
                break;
            case "week":
                collection = await db.collection("ranking-week");
                break;
            case "quarter":
                collection = await db.collection("ranking-quarter");
                break;
            case "history":
                collection = await db.collection("ranking-history");
                break;
            default:
                throw new Error("Invalid type parameter");
        }

        return await collection.find({}).toArray();
    } catch (error) {
        throw new Error("Error fetching ranking data: " + error.message);
    }
};