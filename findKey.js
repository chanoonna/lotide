const findKey = function(object, callback) {
  let returnArr = [];
  for (let prop of Object.keys(object)) {
    if (callback(object[prop])) {
      returnArr.push(prop);
    }
  }

  return returnArr;
};

module.exports = findKey;
