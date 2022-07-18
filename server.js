const http = require('http');
const loader = require('lodash')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res1) => {
  res1.statusCode = 200;
  res1.setHeader('Content-Type', 'text/plain');
  // to display below text in browser
  res1.end('This is import node modules demo!');
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// To execute it use below command
// node CreateServer.js