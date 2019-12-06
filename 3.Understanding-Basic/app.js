const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);

//   response
response.setHeader('Content-Type', 'text/html')

response.write('<html>')
response.write('<head><title>test-node</title></head>')
response.write('<body><h1>Hello From Node</h1></body>')
response.write('</html>')
response.end()

});

server.listen(3000);
