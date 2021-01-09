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

console.log(eqArrays([1, 2, 3, 4, { abc: 15 }], [1, 2, 3, 4, { abc: 15 }], 0));
console.log(eqArrays([1, 2, 3, [3, 4, [5, 6]]], [1, 2, 3, [3, 4, [5, 6]]], 0));
console.log(eqArrays([1, 2, [3, 4]], [1, 2, 3, 4], 0));

assertEqual(eqArrays([1, 2, [ 1, 2, { abc: [1, 2, 3], ccc: "string" } ],  3], [1, 2, [ 1, 2, { abc: [1, 2, 3], ccc: "string" } ],  3], 0), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1], 0), false); // => false

assertEqual(eqArrays([], [], 0), true); // => true
assertEqual(eqArrays([1], [3, 2, 1], 0), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"], 0), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3], 0), false); // => false

assertEqual(eqArrays(["Hello", "Vancouver"], ["Hello", "Vancouver"], 0), true); // => true
assertEqual(eqArrays(["Hello", "Vancouver"], ["hello", "vancouver"], 0), false); // => false