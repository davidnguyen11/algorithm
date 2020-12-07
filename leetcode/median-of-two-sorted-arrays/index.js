// https://leetcode.com/problems/median-of-two-sorted-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  const nums = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      nums.push(nums1[i++]);
    } else {
      nums.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    nums.push(nums1[i++]);
  }

  while (j < nums2.length) {
    nums.push(nums2[j++]);
  }


  if (nums.length % 2 !== 0) {
    const mid = Math.floor(nums.length / 2);
    return nums[mid];
  }

  const mid1 = nums.length / 2;
  const mid2 = mid1 - 1;

  return (nums[mid1] + nums[mid2]) / 2;
};

var nums1 = [1, 3];
var nums2 = [2];

var nums1 = [1];
var nums2 = [1];

var nums1 = [1, 2, 3, 4];
var nums2 = [3, 4, 5];

var nums1 = [];
var nums2 = [3];

console.log(findMedianSortedArrays(nums1, nums2));