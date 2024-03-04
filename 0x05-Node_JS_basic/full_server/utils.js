const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((word) => word.length > 0);
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
        resolve(studentsFields); // Resolves the promises with the studentFields object
      }
    });
  });
}

export default readDatabase;
