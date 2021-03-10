// https://leetcode.com/problems/reverse-words-in-a-string
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  const length = s.length;
  const array = [];

  for (let i = 0; i < length; i++) {
    if (s[i] === ' ') {
      array.push(s[i]);

      while (s[i] === ' ') {
        i++;
      }
    }
    array.push(s[i]);
  }

  const ans = [];
  while (array.length) {
    ans.push(array.pop());
  }

  let l = 0;
  let r = 0;

  while (r < ans.length) {
    if (ans[r] === ' ') {
      revertWord(ans, l, r - 1);
      l = r + 1;
      r = l;
    }
    r++;
  }
  revertWord(ans, l, r - 1);

  return ans.join('');
};

function revertWord(arr, start, end) {
  let l = start;
  let r = end;

  while (l < r) {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}
