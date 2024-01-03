import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const ret = {};
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((results) => {
    for (const resp of results) {
      console.log(resp);
      ret.status = resp.status;
      ret.value = resp.value;
    }
  });
}
