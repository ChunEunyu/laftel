import db from "../db/connection.js";

// 모든 요일 신작 불러오기
export const getAllDaily = async () => {
    const collection = await db.collection("daily");
    const results = await collection.find({}).toArray();
    return results;
};

// 특정 요일 신작 불러오기
export const getDailyByDay = async (day) => {
    const collection = await db.collection("daily");
    const results = await collection.find({ "distributed_air_time": day }).toArray();
    return results;
};
