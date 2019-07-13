// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
  const length = nums.length;
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push({
      value: nums[i],
      oldIdx: i,
    });
  }

  arr.sort(function(a, b) {
    return a.value - b.value;
  });

  let i = 0;
  let j = length - 1;

  while (i < j) {
    if (arr[i].value + arr[j].value === target) {
      i = arr[i].oldIdx;
      j = arr[j].oldIdx;
      break;
    }

    if (arr[i].value + arr[j].value < target) {
      i++;
    } else {
      j--;
    }
  }

  return [i, j];
};
// const nums = [3, 2, 4];
// const target = 6;

// const nums = [2, 7, 11, 15];
// const target = 9;

const nums = [3, 3];
const target = 6;

const result = twoSum(nums, target);
console.log(result);
