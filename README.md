# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chanoonna/lotide`

**Require it:**

`const _ = require('@chanoonna/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual([ array 1 ], [ array 2 ])`: Assertion test for 2 arrays. (Does not return anything)
* `assertEqual(value 1, value 2)`: Assertion test for 2 primitive types. (Does not return anything)
* `assertObjectsEqual({ object 1 }, { object 2 }`: Assertiontest for 2 objects (Does not return anything)
* `countLeters("string")`: Returns an object with characters present in the given string and their occurrence. (Returns empty object when given an empty string and throw an error when given argument is not a string.)
* `countOnly([ array ], { object })`: Counts array elements with a given objects. Returns an object with occurrence of items.
* `eqArrays([ array 1 ], [ array 2 ])`: Returns true if both arrays have same elements, if not returns false.
* `eqObjects.js({ object 1 }, { object 2 })`: Returns true if both objects have same properties and their values, if not returns false.
* `findKey({ object }, callback)`: Returns value if it exists or an empty array if it doesn't.
* `findKeyByValue( value )`: Returns an array of keys found if they exists or an mepty array if it doesn't.
* `flatten([ array ])`: Returns a flattened array. (Flattens nested arrays as well)
* `head([ array ])`: Returns the first element of the given array. Returns an empty array if the length of array is less than or equal to 1.
* `isObject({ object })`: Returns true if given argument is an object type, false if not.
* `letterPositions("string")`: Returns an object with property names as characters and their values are an array of index of the character.
* `map([ array ], callback)`: Returns a new array with elements processed by callback function.
* `middle([ array ])`: Returns a middle element in an array. (or 2 for even length array) Returns an empty array if the array is shorter or equal to 2.
* `tail( [ array ])`: Returns an array excluding the first element of the given array. Returns an empty array if given an array shorter or equal to 1.
* `takeUntil([ array ], callback)`: Returns an array with elements up until the callback function defines.
* `without([ array 1 ], [ array 2])`: Returns and array excluding the elements present in array 2.