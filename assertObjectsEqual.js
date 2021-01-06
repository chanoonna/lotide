// assertObjectsEqual.js is to see if eqObjects are functioning well.

// Approach :
// Not so much. we can simply call eqObjects and see what it returns

// pseudo code
// assertObjectsEqual function (takes 2 objects, OBJ1, OBJ2) {
//   let result = eqObjects(OBJ1, OBJ2)

//   if result true
//     console.log Yay!
//   if not
//     console.log Nooooo!
// }

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  const result = eqObjects(actual, expected);

  if (result) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const eqObjects = (object1, object2) => {
  let result = true;

  for (const [ prop, val ] of Object.entries(object1)) {
    if (!Object.prototype.hasOwnProperty.call(object2, prop)) {     // !object2[prop] will return false in cases with number 0 (fixed: eslint warning)
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

const isObject = (object) => typeof object === "object" ? true : false;

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

const cd = { c: "1", d: ["2", 0] };
const dc = { d: ["2", 0], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

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

assertObjectsEqual(testobj1, testobj2);