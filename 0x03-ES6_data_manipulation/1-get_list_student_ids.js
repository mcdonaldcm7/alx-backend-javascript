export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((val) => val.id);
  }
  return [];
}
