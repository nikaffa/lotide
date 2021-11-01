const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([6,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]));