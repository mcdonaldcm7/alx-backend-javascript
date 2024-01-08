export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (position > (length - 1)) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return buffer;
}
