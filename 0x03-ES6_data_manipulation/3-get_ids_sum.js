export default function getStudentIdsSum(students) {
  return students.map((student) => student.id).reduce((accum, currVal) => accum + currVal);
}
