// Given a string, returns an obj contains letter and array with all the indices of the letter in string
const letterPositions = sentence => {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!result[letter]) { //if doesn'exist in result object,
      result[letter] = [];
    }
    result[letter].push(i);
  }
  return result;
};

//Test function: compares two arrays
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

//Test function: logs a message based on callback's result
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tests
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('lighthouse').h, [3, 5]);
