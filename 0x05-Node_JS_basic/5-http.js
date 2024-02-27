/**
 * In a file named 5-http.js, create a small HTTP server using the http module:
 *
 * - It should be assigned to the variable app and this one must be exported
 * - HTTP server should listen on port 1245
 * - It should return plain text
 * - When the URL path is /, it should display Hello Holberton School! in the page body
 * - When the URL path is /students, it should display This is the list of our
 *   students followed by the same content as the file 3-read_file_async.js
 *   (with and without the database) - the name of the database must be passed
 *   as argument of the file
 * - CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

const fs = require('fs');
const http = require('http');

const pathname = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      try {
        let response = 'This is the list of our students\n';
        const data = fs.readFileSync(pathname, 'utf8');
        const lines = data.split('\n').filter((word) => word.length > 0);
        response += `Number of students: ${lines.length - 1}\n`;
        const studentsFields = {};

        // Fetches all the fields and adds them to a set
        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i].split(',');
          const name = line[0];
          const field = line[(line.length - 1)];

          if (field in studentsFields) {
            studentsFields[field].push(name);
          } else {
            studentsFields[field] = [name];
          }
        }

        for (const k in studentsFields) {
          if (k !== undefined) {
            response += `Number of students in ${k}: ${studentsFields[k].length}. List: ${studentsFields[k].join(', ')}\n`;
          }
        }
        res.end(response);
      } catch (error) {
        throw new Error('Cannot load the database');
      }
      break;
    case '/':
      res.end('Hello Holberton School!');
      break;
    default:
      res.statusCode = 404;
      res.end('Page Not Found');
  }
});

app.listen(1245, 'localhost', () => {
  console.log('...');
});

module.exports = app;
