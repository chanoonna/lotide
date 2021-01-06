// eqArrays.js to solve problems with comparing 2 arrays.

// function (2 arrays as parameters) {
  
//   if the length of 2 arrays are not equal.
//     just return false

//   loop through array 1 and 2 at the same time
//     if array1[i] and array2[i] are not equal
//       return false
//   end loop

//   (loop ended without finding any unequal matches)
//   so return true
// }

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

const assertEqual = function(actual, expected) {
  const typedActual = getType(actual);
  const typedExpected = getType(expected);
  
  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${typedActual} !== ${typedExpected}`);
  } else {
    console.log(`🟢 Assertion Passed: ${typedActual} === ${typedExpected}`);
  }
};

const getType = (input) => {
  if (typeof input === 'string') {
    return `"${input}"`;
  } else {
    return input;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays([], []), true); // => true
assertEqual(eqArrays([1], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

assertEqual(eqArrays(["Hello", "Vancouver"], ["Hello", "Vancouver"]), true); // => true
assertEqual(eqArrays(["Hello", "Vancouver"], ["hello", "vancouver"]), true); // => false