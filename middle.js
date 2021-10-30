//Takes in two arrays and returns true or false, based on a perfect match.
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

//Test function: take in two arrays and console.log an appropriate message
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Takes in array and returns the array with only the middle element(s) of the provided array
const middle = array => {
  const result = [];
  if (array.length < 3) { //with one or two elements returns empty array
    return result;
  }
  if (array.length % 2 !== 0) { //odd number of elements
    const mid = Math.floor(array.length / 2);
    result.push(array[mid]);
  } else { //even number of elements
    const mid1 = (array.length / 2 - 1);
    const mid2 = (array.length / 2);
    result.push(array[mid1], array[mid2]); //two elements in the middle
  }
  return result;
};

//Test 1
let actual = middle([1, 2, 3, 4, 5]);
assertArraysEqual(actual, [3]);

//Test 2
actual = middle([1, 2]);
assertArraysEqual(actual, []);

//Test 3
actual = middle([1, 2, 3, 4]);
assertArraysEqual(actual, [2, 3]);


