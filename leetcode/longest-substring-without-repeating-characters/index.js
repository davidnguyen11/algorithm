// https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/

// var lengthOfLongestSubstring = function(s) {
//   if (s.length === 0)
//     return 0;
//   var storage = {};
//   var str = '';
//   var arr = s.split('');
//   const result = [];

//   for (var i = 0; i < arr.length; i++) {
//     str = str + arr[i];
//     storage[str] = str.length;
//     result.push(str.length);

//     for (var j = i + 1; j < arr.length; j++) {
//       if (str.indexOf(arr[j]) > -1) {
//         str = '';
//         break;
//       }
//       str = str + arr[j];
//       storage[str] = str.length;
//       result.push(str.length);
//     }
//     str = '';
//   }

//   var max = result[0];
//   for (var i = 0; i < result.length; i++) {
//     if (result[i] > max) {
//       max = result[i];
//     }
//   }
//   return max;
// };

var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  var i = 0;
  var j = 0;
  var n = s.length;
  var ans = Number.MIN_SAFE_INTEGER;
  var state = new Set();

  while (j < n) {
    if (!state.has(s[j])) {
      state.add(s[j]);
      ans = Math.max(ans, j - i + 1);
    } else {
      while (s[i] !== s[j]) {
        state.delete(s[i]);
        i++;
      }
      i++;
    }
    j++;
  }

  return ans;
};

// var input = 'abcabcbb'; // Output: abc => length: 3
// var input = 'bbbbb'; // Output: b => length: 1
// var input = 'pwwkew'; // Output: wke => length: 3
// var input = 'aaaaabbbbcdbb'; // Output: bcd => length: 3
// var input = ''; // Output: '' => length: 0
// var input = 'abcdfeghjkkkkk'; // Output: abcdfeghjk => length: 10
// var input = 'dvdf'; // 3
// var input = 'anviaj'; // 5
var input = 'a';

var result = lengthOfLongestSubstring(input);
console.log(result);
