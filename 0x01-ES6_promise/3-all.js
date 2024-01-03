import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let message = '';
  return uploadPhoto()
    .then((value) => {
      message += `${value.body} `;
      createUser()
        .then((value) => { message += `${value.firstName} ${value.lastName}`; })
        .catch(() => { console.log('Signup system offline'); });
    })
    .catch(() => { console.log('Signup system offline'); })
    .finally(() => { console.log(message); });
}
