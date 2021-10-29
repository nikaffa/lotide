//Test function: compares the two values and tells if they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Given an array of strings and an object, returns an object containing counts of everything that the input object listed.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// returns an obj with string as key and as value - counts of each string were found in the allItems array

const countOnly = (allItems, itemsToCount) => {
  const results = {};

  allItems.forEach(item => { //same as with: for (const item of allItems)
    if (itemsToCount[item]) { //checks if item exists in itemsToCount object
      if (results[item]) { //if item exists in result object,
        results[item] ++; //increment its value
      } else {
        results[item] = 1; //if not exist, assign to 1
      }
    }
  });
  return results;
};

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