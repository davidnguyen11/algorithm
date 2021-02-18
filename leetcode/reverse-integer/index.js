// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = x;
  let sign = 1;
  const positiveLimit = Math.pow(2, 31) - 1;
  const negativeLimit = -Math.pow(2, 31);

  if (num < 0) {
    sign = -1;
    num = Math.abs(num);
  }

  let result = 0;
  let mod = 0;

  while (num !== 0) {
    mod = num % 10;
    result = (result * 10) + num % 10;
    num = Math.floor(num / 10);
  }

  result = result * sign;

  if (result > positiveLimit || result < negativeLimit) {
    return 0;
  }

  return result;
};