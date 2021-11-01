const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Test 1
let actual = middle([1, 2]);
assertArraysEqual(actual, []);

//Test 2
actual = middle([1, 2, 3, 4, 5]);
assertArraysEqual(actual, [3]);

//Test 3
actual = middle([1, 2, 3, 4]);
assertArraysEqual(actual, [2, 3]);