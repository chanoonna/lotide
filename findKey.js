const findKey = function(object, callback) {
  let returnArr = [];
  for (let prop of Object.keys(object)) {
    if (callback(object[prop])) {
      returnArr.push(prop);
    }
  }

  return returnArr;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

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

const data1 = {
  teacher: {
    name: "John",
    age: 25,
    weapon: "Pistol"
  },
  schoolNurse: {
    name: "Jack",
    age: 40,
    weapon: "Knife"
  },
  schoolGuard: {
    name: "Amy",
    age: 25,
    weapon: "Machine Gun"
  }
};

const test1 = findKey(data1, x => x.weapon === "Machine Gun");
assertArraysEqual(test1, [ "schoolGuard" ]);
assertArraysEqual(findKey(data1, x => x.age === 25), [ "teacher", "schoolGuard" ]);