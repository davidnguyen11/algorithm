/**
 * url: https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * Idea
 * - Iterate array, each item will check the item "Is that in the special case?"
 * - Special cases: I, X, C
 * -- If it is the special case, check the next letter "Is it in the special pair?"
 * --- If it's in the special pair, use upgrade the sum with the pair value and increase i
 * --- Otherwise, upgrade sum with single value
 */
var romanToInt = function(s) {
  var ROMAN_VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var ROMAN_PAIR_VALUES = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
  var arr = s.split('');
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length)
      break;

    var letter = arr[i];
    var nextLetter = arr[i + 1];

    if ((letter === 'I' || letter === 'X' || letter === 'C') && ROMAN_PAIR_VALUES[letter + nextLetter]) {
      sum = sum + ROMAN_PAIR_VALUES[letter + nextLetter];
      i++;
    } else {
      sum = sum + ROMAN_VALUES[letter];
    }
  }
  return sum;
};

// var test1 = 'MCMXCIV'; // 1994
// var test2 = 'III'; // 3
// var test3 = 'IV'; // 4
var test4 = 'IX'; // 9
// var test5 = 'LVIII'; // 58
// var test6 = 'CMXXI' // 921
console.log(romanToInt(test4));