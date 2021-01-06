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

const tail = (arr) => {
  if (arr.length > 1) {
    return [...arr].slice(1);
  } else {
    return [];
  }
};


const testStuff1 = ["Hello", "Lighthouse", "Labs"];
const testStuff2 = [1, 2, 3];
const testStuff3 = [1];
const testStuff4 = [];

const result1 = tail(testStuff1);
const result2 = tail(testStuff2);
const result3 = tail(testStuff3);
const result4 = tail(testStuff4);

console.log("Check to see if the original length has changed.");
assertEqual(testStuff1.length, 3);
console.log("---------");

console.log("Check to see if the tail function works.");
assertEqual(result1.length, 2);
console.log("---------");

console.log("Check to see if the elements are in correct order.");
assertEqual(result1[0], "Lighthouse");
assertEqual(result1[1], "Labs");
console.log("---------");

console.log("Check to see if the original length has changed.");
assertEqual(testStuff2.length, 3);
console.log("---------");

console.log("Check to see if the tail function works.");
assertEqual(result2.length, 2);
console.log("---------");

console.log("Check to see if the elements are in correct order.");
assertEqual(result2[0], 2);
assertEqual(result2[1], 3);
console.log("---------");

console.log("Check to see if the original length has changed.");
assertEqual(testStuff3.length, 1);
console.log("---------");

console.log("Check to see if the tail function works.");
assertEqual(result3.length, 0);
console.log("---------");

console.log("Check to see if the original length has changed.");
assertEqual(testStuff4.length, 0);
console.log("---------");

console.log("Check to see if the tail function works.");
assertEqual(result4.length, 0);
console.log("---------");