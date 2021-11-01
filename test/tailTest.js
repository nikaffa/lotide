const tail = require('../tail');
const assertEqual = require('../assertEqual');

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