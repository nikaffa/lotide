// Compares two objects: checks if they have identical keys and values
const eqObjects = (object1, object2) => {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) { //if keys quantity is the same
    return false;
  }
  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object1[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    } else if (object1[i] !== object2[i]) { //if key1:value equal in both objs
      return false;
    }
  }
  return true;
};

//Test function: compares two arrays
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

// Test function: compares two values on equality
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = eqObjects;

//Test cases:
const obj1 = { a: "1", b: "2" };
const obj2 = { b: "2", a: "1" };
assertEqual(eqObjects(obj1, obj2), true);

const obj3 = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(obj1, obj3), false);

const obj4 = { a: "2", b: "1" };
assertEqual(eqObjects(obj1, obj4), false);

const obj5 = { a: "1", c: "2" };
assertEqual(eqObjects(obj1, obj5), false);

const obj6 = { c: "1", d: ["2", 3] };
const obj7 = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(obj6, obj7), true);

const obj8 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(obj6, obj8), false);

const obj9 = { c: "1", d: ["3", 2] };
assertEqual(eqObjects(obj6, obj9), false);