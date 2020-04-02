/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  nums.sort(function (a, b) { return a - b; });

  var length = nums.length;

  for (var i = 0; i < length; i++) {
    nums.push(0);
  }

  for (var i = 0; i < length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[length + i]++;
    } else {
      nums[length + i - 1]++;
      nums[length + i] = nums[length + i - 1];
    }
  }

  for (var i = 0; i < length; i++) {
    if (nums[length + i] === 1) {
      return nums[i];
    }
  }

  return 0;
};

var nums = [2, 2, 1];
var nums = [4, 1, 2, 1, 2];
var nums = [4, 1, 2, 1, 2, 4, 5];

console.log(singleNumber(nums));
