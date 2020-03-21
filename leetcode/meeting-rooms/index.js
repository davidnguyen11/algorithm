/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// var canAttendMeetings = function(intervals) {
//   if (intervals.length === 0) return true;
//   intervals.sort(function(a, b) {
//     return a[0] - b[0];
//   });

//   for (var i = 1; i < intervals.length; i++) {
//     if (intervals[i - 1][1] > intervals[i][0]) {
//       return false;
//     }
//   }
//   return true;
// };

// Recursion version
var canAttendMeetings = function(intervals) {
  if (intervals.length === 0) return true;
  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });

  return helper(intervals, 0, 1);
};

function helper(intervals, prev, next) {
  if (next >= intervals.length) {
    return true;
  }

  var start = intervals[prev][1];
  var end = intervals[next][0];

  if (start > end) {
    return false;
  }
  return helper(intervals, prev + 1, next + 1);
}

var intervals = [
  [7, 10],
  [2, 4],
];

console.log(canAttendMeetings(intervals));
