const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose.connect("mongodb://");

app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000");
});
