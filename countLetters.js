// Given a sentence (as a string), returns an object contains a letter and a count of that letter in the sentence
const countLetters = sentence => {
  const result = {};
  for (let letter of sentence) {
    if (result[letter]) { //if already exists in result object,
      result[letter] ++; //increments its value
    } else {
      result[letter] = 1; //otherwise, assign to 1
    }
  }
  return result;
};

module.exports = countLetters;

//Test function: compares the two values and tells if they match or not.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test cases:
assertEqual(countLetters('LHL').H, 1);
assertEqual(countLetters('hello').l, 2);
assertEqual(countLetters('hi').l, undefined);