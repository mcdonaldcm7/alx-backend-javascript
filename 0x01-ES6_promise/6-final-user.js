import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const responses = [];
      results.forEach((result) => {
        responses.push({
          status: result.status,
          value: result.value,
        });
      });
      return responses;
    });
}
