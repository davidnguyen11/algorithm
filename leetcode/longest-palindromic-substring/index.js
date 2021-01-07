// https://leetcode.com/problems/longest-palindromic-substring
/**
 * @param {string} s
 * @return {string}
 */

// This is the brute-force approach, it's around O(n^3)
var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let maxLength = 1;
  let maxString = s[0];
  let temp;

  for (let i = 0; i < s.length - 1; i++) {
    temp = s[i];

    for (let j = i + 1; j < s.length; j++) {
      temp += s[j];

      if (isPalindromic(temp) && temp.length > maxLength) {
        maxLength = temp.length;
        maxString = temp;
      }
    }
  }
  return maxString;
};

function isPalindromic(s) {
  // we can only check in range "s.length / 2"
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}