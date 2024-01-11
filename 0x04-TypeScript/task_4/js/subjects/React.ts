/// <reference path='Subject.ts' />

export namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (super.teacher.experienceTeachingReact === 0) {
        return 'No available teacher';
      }
        return `Available Teacher: ${super.teacher.firstName}`;
    }
  }
}
