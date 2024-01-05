export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((item) => typeof item === 'string')) {
      throw TypeError('Students must be an array contain only strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw TypeError('Students must be an array contain only strings');
    }
    this._students = value;
  }
}
