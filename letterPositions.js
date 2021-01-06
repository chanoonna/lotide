// letterPositions.js is to find the indices of each character present in a given string.

// Approach
// Same with countLetters.js, create a new object and assign the value of the string
// but this time, instead of incrementing the numbers, we want to make it an array so that
// we can add numbers (indices);

// pseudo code
// letterPositions function (takes a string STR) {
//   create a new emptry object OBJ
//   if the length of STR is 0, return the empty object OBJ

//   loop STR one by one using index i
//     if STR[i] is present in OBJ
//       OBJ[STR[i]].push(i)
//     if not
//       OBJ[STR[i]] = [ i ]
//   end loop

//   return OBJ
// }

const letterPositions = (str) => {
  const returnObj = {};
  if (str.length === 0) {
    return returnObj;
  }

  for (let i = 0; i < str.length; i++) {
    if (returnObj[str[i]]) {
      returnObj[str[i]].push(i);
    } else if (!returnObj[str[i]] && str[i] !== ' ') {
      returnObj[str[i]] = [ i ];
    }
  }

  return returnObj;
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

const result1 = letterPositions("aa bb cc dd ee");

assertArraysEqual(result1.a, [0, 1]);
assertArraysEqual(result1.c, [6, 7]);
assertArraysEqual(result1.d, [9, 11]);