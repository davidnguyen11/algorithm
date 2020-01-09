/**
 * url: https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//   if (!s || s.length === 0) return s;

//   var arrS = s.split(' ');
//   var length = arrS.length;
//   var result = '';
//   var wordStr = '';
//   var wordLength;
//   var word;

//   for (var i = 0; i < length; i++) {
//     word = arrS[i];
//     wordLength = word.length;

//     for (var j = 0; j < wordLength; j++) {
//       wordStr = wordStr + word[wordLength - 1 - j];
//     }
//     result = result + wordStr + ' ';
//     wordStr = '';
//   }

//   return result.trim();
// };

var reverseWords = function(s) {
  if (!s || s.length === 0) return s;

  const strLength = s.length;
  let reversedStr = '';

  for (var i = 0; i < strLength; i++) {
    reversedStr = reversedStr + s[strLength - 1 - i];
  }

  const arr = reversedStr.split(' ');
  const arrLength = arr.length;
  let result = '';

  for (var i = 0; i < arrLength; i++) {
    result = result + arr[arrLength - 1 - i] + ' ';
  }

  return result.trim();
};

var s = "Let's take LeetCode contest"; // s'teL ekat edoCteeL tsetnoc
console.log(reverseWords(s));
