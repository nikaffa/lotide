const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([], [1, 2, 1]), false);
assertEqual(eqArrays([1], [1, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 1]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['h', 'i'], ['h', 'i']), true);
assertEqual(eqArrays(['i', 'h'], ['h', 'i']), false);

