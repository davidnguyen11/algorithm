// https://leetcode.com/problems/dot-product-of-two-sparse-vectors
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */

// If we use the original array which has most of values are zero. It's kinda wasted of memory
// The idea is to store non-zero
// and use 2 pointers to iterate the nums value
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this.nums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.nums.push({ index: i, val: nums[i] });
    }
  }

  this.size = this.nums.length;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < this.size && p2 < vec.size) {
    if (this.nums[p1].index === vec.nums[p2].index) {
      sum += this.nums[p1].val * vec.nums[p2].val;
      p1++;
      p2++;
    } else if (this.nums[p1].index < vec.nums[p2].index) {
      p1++;
    } else {
      p2++;
    }
  }

  return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);