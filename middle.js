const middle = (array) => {
  if (array.length < 3) {
    return [];
  }
  const middle = Math.floor(array.length / 2);

  return array.length & 1 ? [ array[middle] ] : [ array[middle - 1], array[middle] ]; // & 1 returns 1 for odd, 0 for even.
};

module.exports = middle;
