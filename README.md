# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nikaffa/lotide`

**Require it:**

`const _ = require('@nikaffa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head (_.head)`: Returns the first element of an array
* `tail (_.tail)`: Returns all elements of an array exept the first one
* `middle (_.middle)`: Takes in array and returns a new array with only the middle element(s) of the provided array
* `assertEqual (_.assertEqual)`: Compares two values on equality
* `eqArrays (_.eqArrays)`: Takes in two arrays and returns true or false, based on a perfect match
* `eqObjects (_.eqObjects)`: Compares two objects: checks if they have identical keys and values
* `assertArraysEqual (_.assertArraysEqual)`: Compares two arrays on equality and outputs a message whether they are equal or not
* `assertObjectsEqual (_.assertObjectsEqual)`: Compares two objects on equality and outputs a message whether they are equal or not
* `countOnly (_.countOnly)`: Given an array of strings and object returns a new object with string as the key and as value - counts of each string were found in the given array
* `countLetters (_.countLetters)`: Given a sentence (as a string), returns an object contains a letter and a count of that letter in the sentence
* `letterPositions (_.letterPositions)`: Given a string, returns an object contains letter as a key and as a value - an array with all the indices of the letter in string
* `findKey (_.findKey)`: Takes in an object and a callback function, returns the first key for which the callback returns true
* `findKeyByValue (_.findKeyByValue)`: Given an object and a string, returns a key which value matched the string
* `takeUntil (_.takeUntil)`: Returns a slice of the array with elements taken from the beginning until the callback returns true
* `without (_.without)`: Takes in two arrays, returns a new array, removing unwanted elements from the source
* `map (_.map)`: Taking in an array and a callback function, returns a new array modified by callback