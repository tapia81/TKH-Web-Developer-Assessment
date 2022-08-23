const mongoose = require("mongoose");
require("dotenv").config();

let MONGO_CLIENT_URI = process.env.PROD_MONGO || process.env.MONGO_URI;

mongoose
  .connect(MONGO_CLIENT_URI)
  .then(() => console.log("Successfully Connected to MONGODB"))
  .catch((err) => err.message);
let db = mongoose.connection;

module.exports = db;
