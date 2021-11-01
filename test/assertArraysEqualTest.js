const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['h', 'i'], ['h', 'i']);

// Sad and edge cases on which assertion was failed:
// assertArraysEqual([], [1, 2, 1]);
// assertArraysEqual([1], [1, 2, 1]);
// assertArraysEqual([1, 2, 3], [1, 2, 1]);
// assertArraysEqual([], []);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(['i', 'h'], ['h', 'i']);