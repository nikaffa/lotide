// Logs a message depends on callback's result
const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect; //util library's inspect function
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// Compares two objects: checks if they have identical keys and values
const eqObjects = (object1, object2) => {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) { //if keys quantity is the same
    return false;
  }
  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object1[i])) {
      if (!eqObjects(object1[i], object2[i])) {
        return false;
      }
    } else if (object1[i] !== object2[i]) { //if key1:value equal in both objs
      return false;
    }
  }
  return true;
};

// Test cases:
const obj1 = { a: "1", b: "2" };
const obj2 = { b: "2", a: "1" };
assertObjectsEqual(obj1, obj2);

const obj3 = { a: "1", b: "2", c: "3" };
assertObjectsEqual(obj1, obj3);

const obj4 = { a: "2", b: "1" };
assertObjectsEqual(obj1, obj4);

const obj5 = { a: "1", c: "2" };
assertObjectsEqual(obj1, obj5);

const obj6 = { c: "1", d: ["2", 3] };
const obj7 = { d: ["2", 3], c: "1" };
assertObjectsEqual(obj6, obj7);

const obj8 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(obj6, obj8);

const obj9 = { c: "1", d: ["3", 2] };
assertObjectsEqual(obj6, obj9);