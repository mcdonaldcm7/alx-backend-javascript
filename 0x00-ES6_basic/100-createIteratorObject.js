export default function createIteratorObject(report) {
  return {
    data: report.allEmployees,
    index: 0,
    track: 0,

    [Symbol.iterator]() {
      return {
        next: () => {
          const keys = Object.keys(this.data);
          let employees = this.data[keys[this.index]];
          let nextIter = {};
          if ((this.track < employees.length)
            && (this.index < (keys.length - 1))) {
            nextIter = { value: employees[this.track], done: false };
            this.track += 1;
          } else if (this.index >= (keys.length - 1)) {
            nextIter = { done: true };
          } else if (this.track >= (employees.length - 1)) {
            this.track = 0;
            this.index += 1;
            employees = this.data[keys[this.index]];
            nextIter = { value: employees[this.track], done: false };
            this.track += 1;
          } else {
            nextIter = { done: true };
          }
          return nextIter;
        },
      };
    },
  };
}
