// const readDatabase = require('../utils');
import readDatabase from '../utils';

const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((result) => {
        let responseMessage = 'This is the first list of our students\n';
        // Sorts the key alphabetically (Case insensitive) 
        const sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

        for (const key of sortedKeys) {
          const students = result[key];
          const numStudents = students.length;
          responseMessage += `Number of students in ${key}: ${numStudents}. List: ${students.join(', ')}\n`;
        }
        response.status(200).send(responseMessage);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const param = request.params.major;
    if (param !== 'CS' && param !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((result) => {
        response.status(200).send(`List: ${result[param].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
