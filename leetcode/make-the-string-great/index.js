// https://leetcode.com/problems/make-the-string-great
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if ((s[i] === s[i].toLowerCase() && top === s[i].toUpperCase()) ||
      (s[i] === s[i].toUpperCase() && top === s[i].toLowerCase())) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};