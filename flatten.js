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
  const result = eqArrays(actual, expected, 0);

  if (result) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (target, compare, index) => {
  if (target.length !== compare.length)
    return false;
  let result = true;
  if (index < target.length) {
    if (Array.isArray(target[index]) && Array.isArray(compare[index])) {
      result = eqArrays(target[index], compare[index], 0);
    } else if (target[index] !== compare[index]) {
      result = false;
    } else {
      result = eqArrays(target, compare, index + 1);
    }
  }
  return result;
};

const flattenRecursion = (input) => {
  return input.reduce((accumulator, currentValue) =>
    Array.isArray(currentValue) ? accumulator.concat(flattenRecursion(currentValue)) : accumulator.concat(currentValue), []);
};
/*
  .reduce() takes an array, and does whatever the callback function does.
  Since, the call back function returns concatenated array so as it iterates through the array,
  the function concatenates array elements one by one to the empty array (at the end of the return statement)
  When it hits the point where the array element is another array (nested array), it will just concatenate the whole array
  because that array is considered just a single element for the outer array.
  If we can flatten the nested array into just a flat array, we can concatenate it as a single array.
  So instead of just concatenating the element (nested array), we can call flattenRecursion again and deal with the nested array first.
  Since the previous calls will wait in stack area for the function to finish concatenation of nested array, it won't just add the nested array.
*/
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
console.log("If we don't treat nested arrays, assertArraysEqual will fail");
console.log("-------------------------");
assertArraysEqual(flattenRecursion([1, 2, 5, [5, 6], [2, 2, [2, 4]], 1, 2, 3]), [1, 2, 5, 5, 6, 2, 2, 2, 4, 1, 2, 3]);
assertArraysEqual(flattenRecursion([1, [2, [3, [4, [5]]]]]), [1, 2, 3, 4, 5]);
console.log("If we treat nested arrays recursively, assertArraysEqual test passes.");