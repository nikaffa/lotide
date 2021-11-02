//Creates an object and exports it
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const without = require('./without');
const map = require('./map');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects,
  countOnly,
  countLetters,
  letterPositions,
  findKey,
  findKeyByValue,
  takeUntil,
  without,
  map
};