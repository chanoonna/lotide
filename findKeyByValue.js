// findKeyByValue.js is to look for a certain key exists in the given object with only its value is given.

// Approach
// There would be no way to search the object in constant time with only the value.
// It should iterate through its keys and see if the value macthes one of the keys we go through.

// pseudo code
// findKeyByValue function (takes a target object, OBJ and the value, VAL to look for) {
//   loop through the properties of the object (we can use const [ prop, val ] of Object.entries(object))
//     if val === VAL
//       return prop
//     if not
//       we don't have to do anything here
//   end loop

//   return undefined
// }

const findKeyByValue = (inputObj, valToSearch) => {
  for (const [ prop, val ] of Object.entries(inputObj)) {
    if (val === valToSearch) {
      return prop;
    }
  }
  return undefined;
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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);