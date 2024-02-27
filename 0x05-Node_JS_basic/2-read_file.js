const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n').filter((word) => word.length > 0);

    /**
     * while (lines[lines.length - 1] === '') {
     *   lines.pop();
     * }
     */

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

    let nOfStudents = 0;
    for (const k in studentsFields) {
      if (k !== undefined) {
        nOfStudents += studentsFields[k].length;
      }
    }
    console.log(`Number of students: ${nOfStudents}`);

    for (const k in studentsFields) {
      if (k !== undefined) {
        console.log(`Number of students in ${k}: ${studentsFields[k].length}. List: ${studentsFields[k].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
