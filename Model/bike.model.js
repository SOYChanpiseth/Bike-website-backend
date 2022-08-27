const req = require("express/lib/request");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid");

const BikeSchema = new Schema({
  bikeId: { type: String, default: uuid.v4 },
  bikeName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  dimension: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const bike = mongoose.model("bike", BikeSchema);
module.exports = bike;
