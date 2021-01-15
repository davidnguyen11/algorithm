// https://leetcode.com/problems/intersection-of-three-sorted-arrays
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  const result = [];
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
      p3++;
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1++;
      } else if (arr2[p2] < arr3[p3]) {
        p2++;
      } else {
        p3++;
      }
    }
  }

  return result;
};

// var arraysIntersection = function (arr1, arr2, arr3) {
//   const result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const index = search(arr2, 0, arr2.length, arr1[i]);
//     const index2 = search(arr3, 0, arr3.length, arr2[index]);

//     if (index2 !== -1) {
//       result.push(arr2[index]);
//     }
//   }

//   return result;
// };

// function search(arr, l, r, target) {
//   if (l > r) return -1;

//   const mid = (l + (r - l) / 2) >> 0;

//   if (arr[mid] === target) return mid;

//   if (arr[mid] < target)
//     return search(arr, mid + 1, r, target);
//   return search(arr, l, mid - 1, target);
// }