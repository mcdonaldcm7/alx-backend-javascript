export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }
  if (startString === '' || startString === undefined) {
    return '';
  }
  const prefixIndex = startString.length;
  let finalString = '';
  let appended = false;
  for (const item of set) {
    if (typeof item === 'string') {
      if (item.startsWith(startString)) {
        if (appended) {
          finalString += '-';
        }
        finalString += item.substring(prefixIndex);
        appended = true;
      }
    }
  }
  return finalString;
}
