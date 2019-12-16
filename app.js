const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Run 1");
  next(); // Mengizinkan permintaan selanjutnya
});
app.use((req, res, next) => {
  res.send("<h1>Hello World, From Express</h1>");
});

app.listen(8000);
