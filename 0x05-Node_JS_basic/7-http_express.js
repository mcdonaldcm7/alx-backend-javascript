const express = require('express');
const fs = require('fs');

const pathname = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
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
    res.send(response.substring(0, (response.length - 1)));
  } catch (error) {
    res.send('Cannot load the database');
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
