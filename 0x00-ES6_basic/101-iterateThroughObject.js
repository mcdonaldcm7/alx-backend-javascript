export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  let first = true;
  for (const rep of reportWithIterator) {
    if (!first) {
      names += '|';
    }
    if (rep !== undefined) {
      names += rep;
    }
    first = false;
  }
  return names;
}
