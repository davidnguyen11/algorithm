// https://leetcode.com/problems/consecutive-characters
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let prev = s[0];
  let curr;
  let maxLength = 1;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    curr = s[i];

    if (curr === prev) {
      count++;
    } else {
      maxLength = Math.max(maxLength, count);
      count = 1;
      prev = curr;
    }
  }

  return Math.max(maxLength, count);
};
