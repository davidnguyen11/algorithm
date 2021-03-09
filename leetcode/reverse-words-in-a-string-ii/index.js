// https://leetcode.com/problems/reverse-words-in-a-string-ii
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  const length = s.length;
  revertWord(s, 0, length - 1);

  let l = 0;
  let r = 0;

  while (r < length) {
    if (s[r] === ' ') {
      revertWord(s, l, r - 1);
      l = r + 1;
    }
    r++;
  }

  revertWord(s, l, r - 1);
};

function revertWord(s, start, end) {
  let l = start;
  let r = end;

  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }
}
