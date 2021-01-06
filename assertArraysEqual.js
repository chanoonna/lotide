// assertArraysEqual.js to test if 2 arrays are equal.
// Andrew Han helped me to understand the instruction.

// function (2 arrays) {
//   const reseult = call a helper function and pass 2 arrays. return value is either true or false

//   if true,
//     print true message.
//   if not,
//     print false message.
// }

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