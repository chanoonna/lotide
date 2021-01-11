const countLetters = function(str) {
  if (str.length === 0) {
    return returnObj;
  }

  const returnObj = {};

  for (let ch of str) {
    if (Object.prototype.hasOwnProperty.call(returnObj, ch)) {
      returnObj[ch]++;
    } else {
      returnObj[ch] = 1;
    }
  }

  return returnObj;
};

module.exports = countLetters;
