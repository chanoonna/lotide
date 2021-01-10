const eqObjects = (object1, object2) => {
  const isObject = require('./isObject.js');
  const eqArrays = require('./eqArrays.js');
  let result = true;

  for (const prop of Object.keys(object1)) {
    if (!Object.prototype.hasOwnProperty.call(object2, prop)) {             // !object2[prop] will return false if the value is 0 or '0'
      return false;
    }
    if (object1[prop] !== object2[prop]) {
      if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {   // Values are primitive and they are not equal, return false.
        result = eqArrays(object1[prop], object2[prop]);                    // Or they are references.
      } else if (isObject(object1[prop]) && isObject(object2[prop])) {
        result = eqObjects(object1[prop], object2[prop]);                   // We can call eqArrays to check if they are identical arrays,
      } else {                                                              // or isObject for nested objects. If so, it will call itself recursively
        return false;
      }
    }
  }

  return result;
};

module.exports = eqObjects;
