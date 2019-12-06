const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  //process.exit(); //Mematikan server
});

server.listen(3000);
