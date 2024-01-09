export default function cleanSet(set, startString) {
  let all = '';
  let sep = false;
  for (const x of set) {
    if (x.startsWith(startString)) {
      if (sep) {
        all += '-';
      }
      all += x.substr(startString.length);
      if (!sep) {
        sep = true;
      }
    }
  }
  return all;
}
