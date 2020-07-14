const express = require("express");
const app = express.Router();

const query = require("../configs/db");
const logger = require("../configs/logger");

app.get("/", async (req, res) => {
  try {
    let list = await query("SELECT * FROM `users`");
    console.log(list);
    res.status(200).json({
      statusCode: 200,
      message: "",
    });
  } catch (error) {
    logger.Error(error.message);
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
});
module.exports = app;
