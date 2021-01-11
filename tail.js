const tail = function(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("The argument is not an array.");
  }
  return arr.length > 1 ? arr.slice(1) : [];
};

module.exports = tail;
