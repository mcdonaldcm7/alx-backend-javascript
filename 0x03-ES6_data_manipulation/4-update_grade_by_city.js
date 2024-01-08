export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      const ret = student;
      if (newGrade !== undefined) {
        ret.grade = newGrade.grade;
      } else {
        ret.grade = 'N/A';
      }
      return ret;
    });
}
