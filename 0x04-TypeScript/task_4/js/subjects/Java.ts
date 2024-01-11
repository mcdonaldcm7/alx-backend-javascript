/// <reference path='Subject.ts' />

export namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (super.teacher.experienceTeachingJava === 0) {
        return 'No available teacher';
      }
        return `Available Teacher: ${super.teacher.firstName}`;
    }
  }
}
