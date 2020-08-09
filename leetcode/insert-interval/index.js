// https://leetcode.com/problems/insert-interval/
var insert = function (intervals, newInterval) {
  var ans = [];
  var temp = newInterval;
  var i = 0;
  var n = intervals.length;

  for (var i = 0; i < n; i++) {
    var curr = intervals[i];
    var newTemp = getInterval(curr, temp);

    if (newTemp) {
      temp = newTemp;
    } else {
      ans.push(curr);
    }
  }
  ans.push(temp);

  ans.sort((a, b) => a[0] - b[0]);

  return ans;
};

function getInterval(curr, newInterval) {
  var startCurr = curr[0];
  var endCurr = curr[1];

  var startNewInterval = newInterval[0];
  var endNewInterval = newInterval[1];

  if (startCurr === startNewInterval && endCurr === endNewInterval) {
    return curr;
  }

  let start = startCurr;
  let end = endCurr;

  if (startCurr <= startNewInterval && endNewInterval <= endCurr) {
    if (endCurr < endNewInterval) {
      end = endNewInterval;
    }

    return [start, end];
  }

  if (startNewInterval <= startCurr && endCurr <= endNewInterval) {
    if (startNewInterval < startCurr) {
      start = startNewInterval;
    }

    if (endCurr < endNewInterval) {
      end = endNewInterval;
    }

    return [start, end];
  }

  if (
    startCurr <= startNewInterval &&
    endCurr <= endNewInterval &&
    startNewInterval <= endCurr
  ) {
    if (endCurr < endNewInterval) {
      end = endNewInterval;
    }

    return [start, end];
  }

  if (
    startNewInterval <= startCurr &&
    endNewInterval <= endCurr &&
    startCurr <= endNewInterval
  ) {
    if (startNewInterval < startCurr) {
      start = startNewInterval;
    }

    return [start, end];
  }
}

var intervals = [
  [1, 3],
  [6, 9],
];
var newInterval = [2, 5];

// var intervals = [[1,3], [6,9]];
// var newInterval = [12, 15];

var intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
var newInterval = [4, 8];

console.log(insert(intervals, newInterval));

// var curr = [1, 9];
// var target = [2, 7];
// var target = [1, 8];

// var curr = [3, 4];
// var target = [3, 6];
// var target = [1, 7];

// var curr = [1, 5];
// var target = [2, 6];
// var target = [2, 5];
// var target = [1, 7];

// var curr = [3, 9];
// var target = [1, 8];
// var target = [1, 9];
// var target = [3, 7];

// var curr = [3, 9];
// var target = [3, 9];

// var curr = [3, 9];
// var target = [1, 2];

// var curr = [1, 2];
// var target = [3, 9];

// console.log(getInterval(curr, target));
