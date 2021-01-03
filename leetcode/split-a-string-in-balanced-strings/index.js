// https://leetcode.com/problems/split-a-string-in-balanced-strings/
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  const counter = {
    L: 0,
    R: 0,
  };
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    counter[letter]++;

    if (counter['L'] === counter['R']) {
      count++;
      counter['L'] = 0;
      counter['R'] = 0;
    }
  }
  return count;
};
