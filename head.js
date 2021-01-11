const head = function(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("The argument is not an array.");
  }
  return arr.length > 0 ? arr[0] : undefined;
};

module.exports = head;
