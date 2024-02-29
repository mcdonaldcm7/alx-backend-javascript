function calculateNumber(type, a, b) {
  if (a === undefined || b === undefined || typeof(a) !== 'number' || typeof(b)
      !== 'number' || typeof(type) !== 'string' || type === undefined) {
    throw TypeError('Invalid argument type!');
  }
  
  a = Math.round(a);
  b = Math.round(b);

  switch(type) {
    case 'SUM':
      return (a + b);
    case 'SUBTRACT':
      return (a - b);
    case 'DIVIDE':
      if (b === 0) {
        return ('Error');
      }
      return (a / b);
    default:
      // Do Nothing
      return;
  }
}

module.exports = calculateNumber;
