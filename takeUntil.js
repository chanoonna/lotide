const takeUntil = function(array, callback) {
  let returnArr = [];
  for (let elem of array) {
    if (callback(elem)) {
      break;
    } else {
      returnArr.push(elem);
    }
  }
  return returnArr;
};

module.exports = takeUntil;
