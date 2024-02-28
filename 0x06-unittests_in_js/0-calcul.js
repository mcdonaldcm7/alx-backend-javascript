function calculateNumber(a, b) {
  if (a === undefined || b === undefined || typeof(a) !== 'number' || typeof(b)
      !== 'number') {
    throw TypeError("arguments must be of type number");
  }
  return (Math.round(a) + Math.round(b));
}

module.exports = calculateNumber;
