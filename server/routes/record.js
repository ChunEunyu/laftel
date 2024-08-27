import express from "express";
import db from "../db/connection.js";
import axios from "axios";

import { ObjectId } from "mongodb";

// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
//const axios = require('axios');

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("carousels");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

/*
router.get("/dd", async (req, res) => {
  try {
    const itemsCollection = db.collection('items');
    const items = await itemsCollection.find({}, { projection: { _id: 0, id: 1 } }).toArray();

    const relatedCollection = db.collection('related');

    // Loop through items and use axios for API calls
    for (const item of items) {
      const apiUrl = `https://api.laftel.net/api/items/v2/${item.id}/related/?limit=6&offset=0`;
      const response = await axios.get(apiUrl);
      const relatedData = response.data;

      // Use Mongoose to insert data into related collection
      await relatedCollection.insertOne({
        id: item.id,
        relatedData
      });
    }

    res.status(200).send('Data transferred successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});
*/

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});


export default router;