// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/
var numKLenSubstrNoRepeats = function (s, k) {
  if (s.length < k) return 0;

  var i = 0;
  var j = 0;
  var ans = 0;
  var n = s.length;
  var set = new Set();

  while (j < n) {
    if (!set.has(s[j]) && set.size < k) {
      set.add(s[j]);
      j++;
    }

    if (set.size === k) {
      ans++;
    }

    if (set.size === k || set.has(s[j])) {
      set = new Set();
      i++;
      j = i;
    }
  }
  return ans;
};

var s = 'abcdef';
var k = 3; // 4
// var k = 2; // 5

var s = 'havefunonleetcode';
var k = 5; // 6

// var s = 'abddef';
// var k = 3; // 2
// var k = 2;

// var s = 'eeeeeee';
// var k = 2;

console.log(numKLenSubstrNoRepeats(s, k));
