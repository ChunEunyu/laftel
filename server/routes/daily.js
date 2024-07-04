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
router.get("/mon", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "월요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

// 수요일 신작 데이터 불러오기
router.get("/wed", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "수요일" }).toArray();
    res.send(results).status(200);
});

// 목요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "목요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

// 화요일 신작 데이터 불러오기
router.get("/tue", async (req, res) => {
    let collection = await db.collection("daily");
    let results = await collection.find({ "distributed_air_time" : "화요일" }).toArray();
    res.send(results).status(200);
});

export default router;