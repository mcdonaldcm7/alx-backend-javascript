const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((word) => word.length > 0);
    console.log(`Number of students: ${lines.length - 1}`);
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
        console.log(`Number of students in ${k}: ${studentsFields[k].length}. List: ${studentsFields[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
