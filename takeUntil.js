const takeUntil = function(array, callback) {
  let returnArr = [];
  for (let elem of array) {
    if (callback(elem)) {
      break;
    } else {
      returnArr.push(elem);
    }
  }
  return returnArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


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

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);