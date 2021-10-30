// Given a sentence (as a string), returns an object contains a letter and a count of that letter in the sentence
const countLetters = sentence => {
  const result = {};
  for (let letter in sentence) {
    if (result[letter]) { //if already exists in result object,
      result[letter] ++; //increments its value
    } else {
      result[letter] = 1; //otherwise, assign to 1
    }
  }
  return result;
};


//Test function: compares the two values and tells if they match or not.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TODO: compare two objs
//Test case 1:
const actual = countLetters('LHL');
const expected = ({ 'L': 2, 'H': 1 });
assertEqual(actual, expected);