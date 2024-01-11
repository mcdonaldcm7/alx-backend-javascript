interface MajorCredits {
  credits: number;
  const brand: string = 'Major';
}

interface MinorCredits {
  credits: number;
  const brand: string = 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return { credits: subject1.credits + subject2.credits };
}

function sumMinorCredits(subject1, subject2) {
  return { credits: subject1.credits + subject2.credits };
}
