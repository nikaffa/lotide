//Takes in two arrays, returns a new array, removing unwanted elements from the source.
const without = (source, itemsToRemove) => {
  const newArray = [];
  for (let el of source) {
    if (!itemsToRemove.includes(el)) {
      newArray.push(el);
    }
  }
  return newArray;
};

module.exports = without;

//Test function: takes in two arrays and returns true or false, based on a perfect match.
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

//Test function: takes in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test 1
const nums = [1, 2, 3];
console.log(without(nums, [1])); //[2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // ["1", "2"]

//Test 2
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); //[ 'hello', 'world' ]
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //the original array was not altered by the without function
