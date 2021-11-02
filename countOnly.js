// Given array of strings allItems that we need to look through, and object itemsToCount,
// returns new obj with string as key and as value - counts of each string were found in array
const countOnly = (allItems, itemsToCount) => {
  const results = {};
  allItems.forEach(item => {
    if (itemsToCount[item]) { //checks if item exists in itemsToCount object
      if (results[item]) { //if item already exists in result object,
        results[item] ++; //increments its value
      } else {
        results[item] = 1; //otherwise, assign to 1
      }
    }
  });
  return results;
};
module.exports = countOnly;

//Test function: compares the two values and tells if they match or not.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test case
// only keys which have a truthy value should be counted;
// all other strings (either set to false or not included in object) should not be counted.
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);