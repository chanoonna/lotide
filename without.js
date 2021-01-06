// without.js to implement a function that takes 2 arrays,
// one for the source and the other for containing elements to be removed.
// Munraj gave me the idea of using .includes()

// pseudo code

// without function (takes 2 arrays: target array, elements to be removed array) {
//   let newArray should be empty

//   loop through target array
//     if removeArray does not have target array[i] (by using .includes())
//       push target array[i] to newArray
//     if it does,
//       do not
//   end loop

//   return newArray
// }

const without = (target, removeThese) => {
  let newArray = [];

  for (let elem of target) {
    if (!removeThese.includes(elem)) {
      newArray.push(elem);
    }
    // I can disregard 'true's since no actions need to be taken.
  }

  return newArray;
};

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);