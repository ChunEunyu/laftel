import express from "express";
import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();


// 신작 데이터 모두 불러오기
router.get("/", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ }).toArray();
    res.send(results).status(200);
});

// 월요일 신작 데이터 불러오기
router.get("/monday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "월요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tuesday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

// 수요일 신작 데이터 불러오기
router.get("/wednesday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "수요일" }).toArray();
    res.send(results).status(200);
});

// 목요일 신작 데이터 불러오기
router.get("/thursday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "목요일" }).toArray();
    res.send(results).status(200);
});

// 금요일 신작 데이터 불러오기
router.get("/friday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "금요일" }).toArray();
    res.send(results).status(200);
});

// 토요일 신작 데이터 불러오기
router.get("/saturday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "토요일" }).toArray();
    res.send(results).status(200);
});

// 일요일 신작 데이터 불러오기
router.get("/sunday", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "일요일" }).toArray();
    res.send(results).status(200);
});


export default router;