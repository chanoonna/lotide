const isObject = require('./isObject.js');
const eqObjects = require('./eqObjects.js');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let result = true;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {       // If both are nested arrays, call it recursively
      result = eqArrays(arr1[i], arr2[i]);
    } else if (isObject(arr1[i]) && isObject(arr2[i])) {           // If both are objects, call eqObjects to see if they are equal.
      result = eqObjects(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return result;
};

module.exports = eqArrays;
