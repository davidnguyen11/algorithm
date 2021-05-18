// https://leetcode.com/problems/largest-number
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort(compare);
  return BigInt(nums.join('')).toString();
};

function compare(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  const n1 = parseInt(`${str1}${str2}`);
  const n2 = parseInt(`${str2}${str1}`);

  if (n1 > n2)
    return -1;

  if (n1 < n2)
    return 1;

  return 0;
}