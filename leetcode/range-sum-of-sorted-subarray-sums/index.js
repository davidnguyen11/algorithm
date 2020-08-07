// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/
var rangeSum = function (nums, n, left, right) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < n; j++) {
      sum += nums[j];
      arr.push(sum);
    }
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  var result = 0;
  for (var i = left - 1; i < right; i++) {
    result += arr[i];
    // Since the answer can be a huge number return it modulo 10^9 + 7
    result %= 1000000007;
  }

  return result;
};

var nums = [1, 2, 3, 4];
var n = 4;
var left = 1;
var right = 5;

console.log(rangeSum(nums, n, left, right));
