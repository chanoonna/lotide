const map = function(array, callback) {
  const results = [];
  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
};

module.exports = map;
