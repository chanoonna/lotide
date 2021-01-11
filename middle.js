const middle = function(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("The argument is not an array.");
  }
  if (arr.length < 3) {
    return [];
  }
  const middle = Math.floor(arr.length / 2);

  return arr.length & 1 ? [ arr[middle] ] : [ arr[middle - 1], arr[middle] ]; // & 1 returns 1 for odd, 0 for even.
};

module.exports = middle;
