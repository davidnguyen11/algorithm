// https://leetcode.com/problems/nested-list-weight-sum/

// Beat 97%
var depthSum = function (nestedList) {
  return helper(nestedList, 1);
};

function helper(array, level) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      sum += helper(array[i], level + 1);
    } else {
      sum += array[i] * level;
    }
  }
  return sum;
}

// Beat 97%
var depthSum = function (nestedList) {
  var arr = [];
  helper(nestedList, 1, arr);

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

function helper(array, level, sumArray) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].isInteger()) {
      sum += array[i].getInteger() * level;
    } else {
      helper(array[i].getList(), level + 1, sumArray);
    }
  }
  sumArray.push(sum);
}

var nestedList = [[1, 1], 2, [1, 1]];
var nestedList = [1, [4, [6]]];

console.log(depthSum(nestedList));