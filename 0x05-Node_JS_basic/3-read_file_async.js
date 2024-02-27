/**
 * Using the database database.csv (provided in project description), create a
 * function countStudents in the file 3-read_file_async.js
 *
 * Create a function named 'countStudents'. It should accept a path in argument
 * The script should attempt to read the database file asynchronously
 * The function should return a Promise
 * If the database is not available, it should throw an error with the text
 * 'Cannot load the database'
 * If the database is available, it should log the following message to the
 * console 'Number of students: NUMBER_OF_STUDENTS'
 * It should log the number of students in each field, and the list with the
 * following format: 'Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES'
 * CSV file can contain empty lines (at the end) - and they are not a valid
 * student!
 */

const fs = require('node:fs/promises');

async function countStudents (path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    lines.pop();
    console.log('Number of students: ' + (lines.length - 1));
    const studentsFields = {};
    // Fetches all the fields and adds them to a set
    for (let i = 1; i < lines.length; i++) {
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
      console.log(`Number of students in ${k}: ${studentsFields[k].length}. List: ${studentsFields[k].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
