const http = require("http");

const server = http.createServer((request, response) => {
  //Routing Request
  const url = request.url;
  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Send Message</title></head>");
    response.write(
      '<body><form action="/message" method="POST"><input type="text" name"message"><button type="submit">send</button></form></body>'
    );
    response.write("</html>");
    return response.end; 
  }
  response.setHeader("Content-Type", "text/html");

  response.write("<html>");
  response.write("<head><title>test-node</title></head>");
  response.write("<body><h1>Hello From Node</h1></body>");
  response.write("</html>");
  response.end();
});

server.listen(3000);
