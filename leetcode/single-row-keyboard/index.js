/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
// var calculateTime = function(keyboard, word) {
//   var mapKeyboard = {};
//   var KEYBOARD_LENGTH = 26;

//   for (var i = 0; i < KEYBOARD_LENGTH; i++) {
//     mapKeyboard[keyboard[i]] = i;
//   }

//   if (word.length === 1) {
//     return mapKeyboard[word[0]];
//   }

//   var startFrom = 0;
//   var result = [];
//   var keyIndex;
//   for (var i = 0; i < word.length; i++) {
//     keyIndex = mapKeyboard[word[i]];
//     result.push(Math.abs(startFrom - keyIndex));
//     startFrom = keyIndex;
//   }

//   var sum = 0;
//   for (var i = 0; i < result.length; i++) {
//     sum += result[i];
//   }
//   return sum;
// };

// Solution 2
// using tail recursion
var calculateTime = function(keyboard, word) {
  var mapKeyboard = {};
  var KEYBOARD_LENGTH = 26;

  for (var i = 0; i < KEYBOARD_LENGTH; i++) {
    mapKeyboard[keyboard[i]] = i;
  }
  return helper(mapKeyboard, word, 0, 0, 0);
};

function helper(mapKeyboard, word, currentIndex, startFrom, sum) {
  if (currentIndex >= word.length) return sum;
  var keyIndex = mapKeyboard[word[currentIndex]];
  var value = Math.abs(startFrom - keyIndex);
  return helper(mapKeyboard, word, currentIndex + 1, keyIndex, sum + value);
}

var keyboard = 'abcdefghijklmnopqrstuvwxyz';
var word = 'cba';

var keyboard = 'pqrstuvwxyzabcdefghijklmno';
var word = 'leetcode';

var keyboard = 'pqrstuvwxyzabcdefghijklmno';
var word = 'n';

console.log(calculateTime(keyboard, word));
