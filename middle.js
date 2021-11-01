// Takes in array and returns a new array with only the middle element(s) of the provided array
const middle = array => {
  const result = [];
  if (array.length < 3) { //if one or two elements returns empty array
    return result;
  }
  if (array.length % 2 !== 0) { //if odd number of elements
    const mid = Math.floor(array.length / 2);
    result.push(array[mid]); //returns the middle element
  } else { //if even number of elements
    const mid1 = (array.length / 2 - 1);
    const mid2 = (array.length / 2);
    result.push(array[mid1], array[mid2]); //returns two elements in the middle
  }
  return result;
};

module.exports = middle;


