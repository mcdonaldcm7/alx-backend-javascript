import express;

const readDatabase = require('../utils').readDatabase;

class StudentsController {
  static getAllStudents(request, response) {
    // Return a status 200
    let resp = 'This is the list of our students';
    readDatabase(response.url.replace('/', ''))
      .then(() => {
      })
      .catch((error) => {
        response.status = 500;
        response.render('500', { error: 'Cannot load the database'  });
      });
  }
}
