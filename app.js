const http = require("http");

const express = require("express");
const app = express();
const server = http.createServer(app);

app.use((req, res, next) => {
  console.log("Run 1");
  next(); // Mengizinkan permintaan selanjutnya
});
app.use((req, res, next) => {
  res.send("<h1>Hello World, From Express</h1>");
});

server.listen(8000);
