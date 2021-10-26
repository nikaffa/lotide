// Returns all elements of the array exept the first one
const tail = (arr) => {
  return arr.slice(1);
};

// Compares the two values it takes in and prints out a message telling if they match or not.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case 1:
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case 2:
result = tail(["Hello"]);
assertEqual(result.length, 1);
assertEqual(result[1], "Lighthouse");

// Test Case 3:
result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);