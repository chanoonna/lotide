// flatten.js takes an array and if there is nested array, it flattens it.
// I got this idea from prep work of Lighthouse Labs.

// Approach : We probably can use .reduce() and since we are not summing numbers,
// we can use Array.prototype.concat() to merge arrays.
// .push() will only generate nested arrays with arrays.
// This way, we don't have to check the element of the array is a nested array or not. (I assume)
// assertArraysEqual function does not return right result for nested arrays.

// pseudo code

// flatten function (takes an array ARR) {
//   create new Empty array EMPTYARR
//    directly assign it to ARR.reduce call a helper function (accumulator, currentValue)
//     *** the function concatenates accumolator and currentValue and then return the array.

//   return EMPTYARR
//   or maybe I can just skip the whole thing and return reduce itself
// }

const flatten = (input) => {
  return input.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
};

const assertArraysEqual = (actual, expected) => {
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const flattenRecursion = (input) => {
  return input.reduce((accumulator, currentValue) =>
    Array.isArray(currentValue) ? accumulator.concat(flattenRecursion(currentValue)) : accumulator.concat(currentValue), []);
};

// More detailed version

// const flattenRecursion = (input) => {
//   return input.reduce(function(accumulator, currentValue) {
//     if (Array.isArray(currentValue)) {
//       return accumulator.concat(flattenRecursion(currentValue));
//     } else {
//       return accumulator.concat(currentValue);
//     }
//   }, []);
// };

assertArraysEqual(flatten([1, 2, 5, [5, 6], [2, 2, [2, 4]], 1, 2, 3]), [1, 2, 5, 5, 6, 2, 2, 2, 4, 1, 2, 3]);
assertArraysEqual(flatten([1, [2, [3, [4, [5]]]]]), [1, 2, 3, 4, 5]);
console.log("If we don't treat nested arrays, assertArraysEqual will fail")
console.log("-------------------------");
assertArraysEqual(flattenRecursion([1, 2, 5, [5, 6], [2, 2, [2, 4]], 1, 2, 3]), [1, 2, 5, 5, 6, 2, 2, 2, 4, 1, 2, 3]);
assertArraysEqual(flattenRecursion([1, [2, [3, [4, [5]]]]]), [1, 2, 3, 4, 5]);
console.log("If we treat nested arrays recursively, assertArraysEqual test passes.");