/**
 * @param {string} digits
 * @return {string[]}
 */

var PHONE = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  digits = digits.split('');
  var arr = [];
  permutation('', 0, digits, arr);
  return arr;
};

function permutation(combination, digitIndex, digits, arr) {
  if (combination.length === digits.length) {
    arr.push(combination);
    return;
  }

  var letters = PHONE[digits[digitIndex]];
  for (var i = 0; i < letters.length; i++) {
    permutation(combination + letters[i], digitIndex + 1, digits, arr);
  }
}

var digits = '2';
letterCombinations(digits);
