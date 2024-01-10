interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Harrison',
  lastName: 'Wells',
  age: 46,
  location: 'Central City'
};

const student2: Student = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  age: 33,
  location: 'Gotham'
};

const studentList: Array<Student> = [student1, student2];

function renderTable(students: Array<Student>) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  students.forEach((student) => {
    // creates a table row
    const row = document.createElement("tr");

    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    const cell = document.createElement("td");
    const cellText = document.createTextNode(`${student.firstName} ${student.location}`);
    cell.appendChild(cellText);
    row.appendChild(cell);

    // add the row to the end of the table body
    tblBody.appendChild(row);
  });

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

renderTable(studentList);
