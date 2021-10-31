/*Takes in an object and a callback,
  returns the first key for which the callback returns true,
  if no key is found, returns undefined */
const findKey = (object, callback) => {
  const arr = Object.keys(object);
  for (const item of arr) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

// Test: compares two values on equality
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases:
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(obj1, x => x.stars === 2), "noma");
assertEqual(findKey(obj1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(obj1, x => x.stars === 7), undefined);