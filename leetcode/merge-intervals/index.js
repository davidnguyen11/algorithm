/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });

  var result = [intervals[0]];
  helper(intervals, 1, 0, result);
  return result;
};

function helper(arr, i, j, result) {
  if (i >= arr.length) {
    return;
  }
  var afterStart = arr[i][0];
  var afterEnd = arr[i][1];

  var beforeStart = result[j][0];
  var beforeEnd = result[j][1];

  if (afterStart <= beforeEnd) {
    result[j][0] = Math.min(beforeStart, afterStart);
    result[j][1] = Math.max(beforeEnd, afterEnd);
  } else {
    result.push(arr[i]);
  }
  helper(arr, i + 1, result.length - 1, result);
}

// [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
var intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

var intervals = [];

// [ [ 1, 8 ], [ 15, 18 ] ]
var intervals = [
  [1, 3],
  [2, 6],
  [5, 8],
  [15, 18],
];

// [ [ 0, 4 ] ]
var intervals = [
  [1, 4],
  [0, 4],
];

// [ [ 1, 4 ] ]
var intervals = [
  [1, 4],
  [2, 3],
];

// [[1, 5]]
var intervals = [
  [1, 4],
  [4, 5],
];

// [[1, 1]]
var intervals = [
  [1, 1],
  [1, 1],
];

console.log(merge(intervals));
