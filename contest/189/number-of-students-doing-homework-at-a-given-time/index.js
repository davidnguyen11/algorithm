var busyStudent = function (startTime, endTime, queryTime) {
  var length = startTime.length;
  var count = 0;

  for (var i = 0; i < length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
};

var startTime = [1, 2, 3];
var endTime = [3, 2, 7];
var queryTime = 4;

var startTime = [4];
var endTime = [4];
var queryTime = 4;

var startTime = [4];
var endTime = [4];
var queryTime = 5;

var startTime = [1, 1, 1, 1];
var endTime = [1, 3, 2, 4];
var queryTime = 7;

var startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10];
var queryTime = 5;

console.log(busyStudent(startTime, endTime, queryTime));
