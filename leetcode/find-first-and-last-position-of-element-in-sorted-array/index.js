/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const findPosition = (nums, target, bound) => {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      result = mid;

      if (bound === 'lower') {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return result;
};

var searchRange = function (nums, target) {
  const lowerBound = findPosition(nums, target, 'lower');
  const upperBound = findPosition(nums, target, 'upper');

  return [lowerBound, upperBound];
};

var nums = [5, 7, 7, 8, 8, 10];
var target = 8;
var target = 6;
var target = 7;

var nums = [5, 7, 7, 8, 8, 8, 10];
var target = 8;

var nums = [10, 10, 10];
var target = 10;

const a = searchRange(nums, target);
console.log(a);
