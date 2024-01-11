/// <reference path='Subject.ts' />

export namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }

  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher() {
      return `Available Teacher: ${super.teacher.firstName}`;
    }
  }
}
