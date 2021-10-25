const sum = (a, b) => {
  const result = a + b
  if (typeof result === 'number') {
    return result;
  }
  throw new Error('parameters must be numbers');
}

module.exports = sum