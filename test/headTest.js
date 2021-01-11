const head = require('../head.js');
const assertEqual = require('../assertEqual.js');

assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
