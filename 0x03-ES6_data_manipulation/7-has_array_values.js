export default function hasValueFromArray(set, array) {
  for (const x of array) {
    if (!set.has(x)) {
      return false;
    }
  }
  return true;
}
