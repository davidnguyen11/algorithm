// https://leetcode.com/problems/single-element-in-a-sorted-array/
var singleNonDuplicate = function (nums) {
  function helper(nums, low, high) {
    var mid = Math.floor((low + high) / 2);

    if (low >= high) return;

    if (nums[mid] === nums[mid - 1]) {
      nums[mid] = undefined;
      nums[mid - 1] = undefined;
    }

    if (nums[mid] === nums[mid + 1]) {
      nums[mid] = undefined;
      nums[mid + 1] = undefined;
    }

    // left
    helper(nums, low, mid - 1);

    // right
    helper(nums, mid + 1, high);
  }

  function getSingleNum(nums, low, high) {
    var mid = Math.floor((low + high) / 2);

    if (low >= high || nums[mid] !== undefined) {
      return nums[mid];
    }

    // left
    var left = getSingleNum(nums, low, mid - 1);

    // right
    var right = getSingleNum(nums, mid + 1, high);

    return left !== undefined ? left : right;
  }

  helper(nums, 0, nums.length - 1);

  return getSingleNum(nums, 0, nums.length - 1);
};

var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// var nums = [3, 3, 7, 7, 10, 11, 11];
var nums = [0, 1, 1];
console.log(singleNonDuplicate(nums));
