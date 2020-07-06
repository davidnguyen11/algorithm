// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (!s.length) return 0;

  var i = 0;
  var j = 0;
  var n = s.length;
  var set = new Set();
  var ans = Number.MIN_SAFE_INTEGER;

  while (j < n) {
    if (!set.has(s[j]) && set.size < 2) {
      ans = Math.max(ans, j - i + 1);
      set.add(s[j]);
      j++;
    }

    // In case, set already has the "letter"
    // we update the "ans" but not add "letter" to set
    // increase `j`
    if (set.has(s[j])) {
      ans = Math.max(ans, j - i + 1);
      j++;
    }

    // If the set already has 2 letters
    // and we meet the third letter not in the set
    // reset
    // shrink i
    // move j back to i
    if (set.size === 2 && !set.has(s[j])) {
      i++;
      j = i;
      set = new Set();
    }
  }

  return ans === Number.MIN_SAFE_INTEGER ? 0 : ans;
};

var s = 'eceba'; // ece
var s = 'ccaabbb'; // aabbb
var s = 'kkkaabb';
var s = 'aaaaa';

console.log(lengthOfLongestSubstringTwoDistinct(s));
