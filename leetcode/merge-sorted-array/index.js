// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i++]);
    } else {
      result.push(nums2[j++]);
    }
  }

  while (i < m) {
    result.push(nums1[i++]);
  }

  while (j < n) {
    result.push(nums2[j++]);
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = result[i];
  }
};

var nums1 = [1, 2, 3, 0, 0];
var m = 2;
var nums2 = [2, 5, 6];
var n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
