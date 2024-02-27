const http = require('node:http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!\n');
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
