// Given an object and a string, returns a key which value matched the string
const findKeyByValue = (object, value) => {
  const arr = Object.keys(object);
  for (let item of arr) {
    if (object[item] === value) {
      return item;
    }
  }
};
module.exports = findKeyByValue;

// Test function: compares two values on equality
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test case:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



