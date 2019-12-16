const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("Always Run");
  next();
});

app.use("/add", (req, res, next) => {
  console.log("Run 1");
  res.send("<h1>I Like Sex</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Kiss Me");

  res.send("<h1>Hello World, From Express</h1>");
});

app.listen(8000);
