const express = require("express");
const createError = require("http-errors");
const mongoose = require("mongoose");
const BikeController = require("../Controller/bike.controller");
const router = express.Router();
const cors = require("cors")

router.get("/", BikeController.listAllBike);

router.post("/register", BikeController.createBike);

router.get("/:id", BikeController.getBikeById);

router.patch("/:id", BikeController.updateBikeInfo);

router.delete("/:id", BikeController.deleteBikeInfo);

module.exports = router;
