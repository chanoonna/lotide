// eqObjects.js to see if 2 given objects are identifal

// Approach :
// The tricky part in this problem is not to compare their references.
// We should always pass the value of each properties to do assertion checks.

// pseudo code
// eqObjects function (takes 2 objects, OBJ1, OBJ2) {
//   create new boolean valiable BOOL and assign it to true

//   loop through the properies of object 1
//     if prop of OBJ1 does not exist in OBJ2
//       return false
//     if it does
//       compare the value of OBJ1.prop and OBJ2.prop
//         if primitive data type, compare and return true or false
//         if array, call eqArrays.js and return eqArrays's return value
//         if object, call this(eqObjects) and return its return value.
//   end loop

//   return BOOL
// }

const eqObjects = (object1, object2) => {
  const isObject = (object) => typeof object === "object" ? true : false;
  let result = true;                                                // Helper function to check whether the property is an object or not.

  for (const prop of Object.keys(object1)) {
    if (!object2.hasOwnProperty(prop)) {                            // !object2[prop] will return false in cases with number 0
      return false;
    }
    if (object1[prop] !== object2[prop]) {                          // When the values are different, there can be 2 different cases
      if (Array.isArray(object1[prop])) {                           // One would the values are primitive and they are not equal
        result = eqArrays(object1[prop], object2[prop], 0);         // The other is that they are ference types so their addresses are different
      } else if (isObject(object1[prop])) {                         // So we need to see if the property of the objects are whether primitive or not
        result = eqObjects(object1[prop], object2[prop]);           // We can call eqArrays to check if they are identical arrays,
      } else {                                                      // or isObject for nested objects. If so, it will call itself recursively
        return false;
      }
    }
  }

  return result;
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

const assertArraysEqual = (actual, expected) => {
  const result = eqArrays(actual, expected, 0);

  if (result) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2, index) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const isObject = (object) => typeof object === "object" ? true : false;
  let result = true;

  if (index < arr1.length) {
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      result = eqArrays(arr1[index], arr2[index], 0);
    } else if(isObject(arr1[index]) && isObject(arr2[index])) {
      result = eqObjects(arr1[index], arr2[index]);
    } else if (arr1[index] !== arr2[index]) {
      result = false;
    } else {
      result = eqArrays(arr1, arr2, index + 1);
    }
  }
  return result;
};

const cd = { c: "1", d: ["2", 0] };
const dc = { d: ["2", 0], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const testobj1 = {
  a: [1, 2, 3],
  b: { a: 0, b: 2, c: 3 },
  c: "test",
  d: 10
};

const testobj2 = {
  a: [1, 2, 3],
  b: { a: 0, b: 2, c: 3 },
  c: "test",
  d: 10
};

assertEqual(eqObjects(testobj1, testobj2), true);