// middle.js gets an elements(s) in the middle of a given array

// Approach

// There can be 2 different cases.
// One is when the given array.length is odd and the other is even.
// Odd => Math.floor(array.length / 2) will do.
// Even => Has 2 middle elements. So they will be array.length / 2 and array.length / 2 - 1

// There can be 2 different way to implement this.
// Separate it into 2 cases
// One is when it is ood, the other is when it is even.

// Or, Do everything first with Math.floor (because it won't affect the result of even)
// and take necessary steps, then add the next element at the end.

// Edge cases
// Array.length < 3
// return an empty array

// pseudo code

// middle function (takes an ARRAY) {
//   assign middle value to a new variable MID. => it should look like Math.floor(ARRAY.length);

//   if ARRAY has an odd number of elements
//     return ARRAY[MID]
//   if not
//     return [ ARRAY[MID - 1], ARRAY[MID] ]
// }

const middle = (array) => {
  if (array.length < 3) {                                     // If array length is less than 2, return an empty array
    return [];
  }
  const middle = Math.floor(array.length / 2);                // Find the middle value. Odd numbers will have a float value so floor it.
                                                              // It doesn't affect even numbers
  return array.length & 1 ? [ array[middle] ] : [ array[middle - 1], array[middle] ];
};                                                            // array.length & 1 to see if the number is odd.
                                                              // If it returns 1, it is truthy so return an array with a single element. (for odd)
                                                              // If it returns 0, it is falthy so return an array with 2 elements. (for even)

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

const assertArraysEqual = (actual, expected) => {
  const result = eqArrays(actual, expected, 0);

  if (result) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, [3, 4], 5, 6]), [3, 4]);