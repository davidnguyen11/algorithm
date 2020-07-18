// https://leetcode.com/problems/sliding-window-maximum/
var maxSlidingWindow = function (nums, k) {
  var n = nums.length - k + 1;
  var ans = [];
  var max;

  for (var i = 0; i < n; i++) {
    max = nums[i];

    for (var j = i + 1; j <= k + i - 1; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }
    ans.push(max);
  }

  return ans;
};

var nums = [1, 3, -1, -3, 5, 3, 6, 7];
var k = 3;

console.log(maxSlidingWindow(nums, k));
