/**
 * @url https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
// var findLengthOfLCIS = function(nums) {
//   if (nums.length === 0)
//     return 0;

//   var length = 1;
//   var max = 1;

//   for (var i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < nums[i + 1]) {
//       length++;
//       if (length >= max) {
//         max = length;
//       }
//     } else {
//       length = 1;
//     }
//     if (i + 1 === nums.length - 1) {
//       break;
//     }
//   }
//   return max;
// };

var findLengthOfLCIS = function (nums) {
  if (!nums.length) return 0;

  var n = nums.length;
  var i = 0;
  var j = 0;
  var ans = Number.MIN_SAFE_INTEGER;
  var acc = 1;

  while (j < n) {
    if (nums[j] > nums[i]) {
      acc++;
      ans = Math.max(ans, acc);
      i++;
    } else {
      acc = 1;
      i = j;
    }
    j++;
  }
  return ans === Number.MIN_SAFE_INTEGER ? 1 : ans;
};

// var input = [];
var input = [1, 3, 5, 4, 7];
var input = [2, 2, 2, 2];
var input = [1, 3, 3, 5, 4, 7];
var input = [1, 3, 2, 4, 5, 7];

console.log(findLengthOfLCIS(input));
