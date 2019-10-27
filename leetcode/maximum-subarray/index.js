/**
 * url: https://leetcode.com/problems/maximum-subarray/submissions/
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   if (nums.length === 1)
//     return nums[0];

//   var maxSum = Number.NEGATIVE_INFINITY;

//   for (var i = 0; i < nums.length; i++) {
//     var sum = 0;
//     for (var j = i; j < nums.length; j++) {
//       sum = sum + nums[j];

//       if (sum > maxSum) {
//         maxSum = sum;
//       }
//     }
//   }
//   return maxSum;
// };

var maxSubArray = function(nums, low, high) {
  if (low === high) {
    return nums[low];
  }

  var mid = Math.floor((low + high) / 2);

  var maxLeft = Number.NEGATIVE_INFINITY;
  var sum = 0;
  for (var i = mid; i >= 0; i--) {
    sum = sum + nums[i];
    if (sum > maxLeft) {
      maxLeft = sum;
    }
  }

  var maxRight = Number.NEGATIVE_INFINITY;
  sum = 0;
  for (var i = mid + 1; i <= high; i++) {
    sum = sum + nums[i];
    if (sum > maxRight) {
      maxRight = sum;
    }
  }

  var max_left_right = Math.max(maxSubArray(nums, low, mid), maxSubArray(nums, mid + 1, high));

  console.log('low', low);
  console.log('high', high);
  // console.log('left', maxLeft);
  // console.log('right', maxRight);
  // console.log('max_left_right', max_left_right);
  // console.log();

  return Math.max(max_left_right, maxLeft, maxRight);
};


const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const input = [1]
// const input = [-2, 1];
// const input = [-2, 1, -3, 4];
console.log(maxSubArray(input, 0, input.length - 1));
