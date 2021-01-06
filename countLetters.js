// countLetters.js takes a string, counts each characters,
// and return the object that has properties of each charaters
// with the number of their occurance in the string as its value.

// Approach
// We can use object with this problem.
// Every time we spot a character, we add it to the object,
// or if it already exist, increment the value of it.

// pseudo code

// countLetters function (takes a string STR) {
//   create an object OBJ
//   if the length of string is 0, return OBJ

//   loop through each characters CHAR, of the string STR
//     if OBJ has no property of CHAR
//       assign new property with the property name CHAR and set its value to 1, since it found 1.
//     else OBJ has a property named CHAR
//       increment the value of the property CHAR
//   end loop

//   return OBJ
// }

const countLetters = (str) => {
  const returnObj = {};                       // Create an object.
  if (str.length === 0) {                     // if there are no characters in
    return returnObj;                         // return an empty object
  }

  for (let ch of str) {                       // Iterate through all the characters
    if (returnObj[ch]) {                      // If it has already assigned to the object, just increment the value
      returnObj[ch]++;
    } else {
      returnObj[ch] = 1;                      // If not, assign the new property to the object and make its value 1
    }
  }

  return returnObj;                           // Return object.
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

const result1 = countLetters("aabbcc  ddeefff");
assertEqual(result1.a, 2);
assertEqual(result1.f, 3);
assertEqual(result1[" "], 2);
