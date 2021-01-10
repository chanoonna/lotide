const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const eqObjects = require('./eqObjects.js');
  const result = eqObjects(actual, expected);

  if (result) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
