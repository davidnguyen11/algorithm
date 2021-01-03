// https://leetcode.com/problems/maximum-units-on-a-truck
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // Sort desc based on "units" of each box
  boxTypes.sort((a, b) => b[1] - a[1]);
  const length = boxTypes.length;
  let totalBoxes = 0;
  let result = 0;

  for (let i = 0; i < length; i++) {
    totalBoxes += boxTypes[i][0];
  }

  // There are 2 conditions to stop the loop
  // 1. total boxes we have in boxTypes
  // 2. truckSize must have slots
  // truckSize could remain non-empty value
  while (totalBoxes > 0 && truckSize > 0) {
    for (let i = 0; i < length; i++) {
      if (boxTypes[i][0] !== 0) {
        result += boxTypes[i][1];
        boxTypes[i][0]--;
        totalBoxes--;
        truckSize--;
        break;
      }
    }
  }
  return result;
};

// The data show the case truckSize remains non-empty
// And all boxes are empty
var boxTypes = [
  [1, 3],
  [5, 5],
  [2, 5],
  [4, 2],
  [4, 1],
  [3, 1],
  [2, 2],
  [1, 3],
  [2, 5],
  [3, 2],
];
var truckSize = 35;

console.log(maximumUnits(boxTypes, truckSize));
