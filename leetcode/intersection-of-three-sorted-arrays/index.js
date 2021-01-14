// https://leetcode.com/problems/intersection-of-three-sorted-arrays
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const index = search(arr2, 0, arr2.length, arr1[i]);
    const index2 = search(arr3, 0, arr3.length, arr2[index]);

    if (index2 !== -1) {
      result.push(arr2[index]);
    }
  }

  return result;
};

function search(arr, l, r, target) {
  if (l > r) return -1;

  const mid = (l + (r - l) / 2) >> 0;

  if (arr[mid] === target) return mid;

  if (arr[mid] < target)
    return search(arr, mid + 1, r, target);
  return search(arr, l, mid - 1, target);
}