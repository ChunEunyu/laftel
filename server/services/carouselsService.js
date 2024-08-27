import db from "../db/connection.js";

// 데이터의 순서를 섞어서 가져오기
export const getRandomCarousels = async () => {
    const collection = await db.collection("carousels");
    const count = await collection.countDocuments();
    const sampleSize = Math.min(count, 9);
    const results = await collection.aggregate([{ $sample: { size: sampleSize } }]).toArray();
    return results;
};