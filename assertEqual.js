
const assertEqual = function(actual, expected) {
  const typedActual = getType(actual);
  const typedExpected = getType(expected);
  
  if (actual !== expected) {
    console.log('🔴 Assertion Failed: ' + typedActual + ' !== ' + typedExpected);
  } else {
    console.log('🟢 Assertion Passed: ' + typedActual + ' === ' + typedExpected);
  }
};

const getType = (input) => {
  if (typeof input === 'string') {
    return '"' + input + '"';
  } else {
    return input;
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

