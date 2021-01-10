const assertArraysEqual = (actual, expected) => {
  const eqArrays = require('./eqArrays.js');
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
