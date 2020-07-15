// https://leetcode.com/problems/find-all-anagrams-in-a-string/
var findAnagrams = function (s, p) {
  var i = 0;
  var j = 0;
  var ans = [];
  var lengthS = s.length;
  var lengthP = p.length;
  var dict = getCounter(p);
  var char;
  var count = 0;
  var state = {};

  while (j < lengthS) {
    char = s[j];
    count++;

    state[char] = state[char] || 0;
    state[char]++;

    if (count === lengthP) {
      var valid = true;

      for (const [key] of Object.entries(dict)) {
        if (state[key] !== dict[key]) {
          valid = false;
          break;
        }
      }

      if (valid) {
        ans.push(i);
      }

      count--;
      char = s[i];
      state[char]--;
      i++;
    }
    j++;
  }
  return ans;
};

function getCounter(str) {
  var dict = {};
  var char;
  for (var i = 0; i < str.length; i++) {
    char = str[i];
    dict[char] = dict[char] || 0;
    dict[char]++;
  }
  return dict;
}

var s = 'cbaebabacd';
var p = 'abc';

console.log(findAnagrams(s, p));
