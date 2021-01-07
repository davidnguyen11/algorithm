// https://leetcode.com/problems/add-strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let a = num1;
  let b = num2;

  if (num1.length < num2.length) {
    a = num2;
    b = num1;
  }

  let result = '';

  let index1 = a.length - 1;
  let index2 = b.length - 1;
  let carry = 0;
  let mod = 0;
  let sum = 0;

  while (index1 >= 0) {
    const n1 = parseInt(a[index1], 10);
    const n2 = parseInt(b[index2], 10) || 0;
    sum = n1 + n2 + carry;
    carry = 0;

    mod = sum % 10;
    result = mod + result;

    if (sum > 9) {
      carry = 1;
    }

    index1--;
    index2--;
  }

  // avoid leading zero
  if (carry > 0) {
    result = carry + result;
  }

  return result;
};