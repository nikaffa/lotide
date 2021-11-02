// Taking in array & callback function, returns new array modified by callback
const map = (arr, callback) => {
  const results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//Test: takes in two arrays and returns true or false, based on a perfect match.
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

//Test function: take in two arrays and console.log a message
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test case 1
const words = ["ground", "control", "to", "major", "tom"];
const expected = ['g', 'c', 't', 'm', 't'];
const actual =  map(words, element => element[0]);
assertArraysEqual(expected, actual);

// Test case 2
const words2 = [1, 2, 3];
const expected2 = [2, 4, 6];
const actual2 =  map(words2, element => element * 2);
assertArraysEqual(expected2, actual2);

// Test case 3
const words3 = [5, 7, 23, 76];
const expected3 = [10, 14, 46, 152];
const actual3 =  map(words3, element => element + element);
assertArraysEqual(expected3, actual3);