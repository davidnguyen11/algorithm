// https://leetcode.com/problems/valid-palindrome/
// Solution 1: normalize array
// var isPalindrome = function (s) {
//   var arr = [];
//   var letter;

//   for (var i = 0; i < s.length; i++) {
//     letter = s[i].toLowerCase();

//     if (isLetter(letter)) {
//       arr.push(letter);
//     }
//   }

//   var length = arr.length;

//   for (var i = 0; i < length; i++) {
//     if (arr[i] !== arr[length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// Solution 2: Using 2 pointers
var isPalindrome = function (s) {
  var left = 0;
  var right = s.length - 1;

  while (left < right) {
    var leftLetter = s[left].toLowerCase();
    var rightLetter = s[right].toLowerCase();

    if (isLetter(leftLetter) && isLetter(rightLetter)) {
      if (leftLetter !== rightLetter) {
        return false;
      }
    }

    if (!isLetter(leftLetter) && isLetter(rightLetter)) {
      left++;
    } else if (isLetter(leftLetter) && !isLetter(rightLetter)) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

function isLetter(letter) {
  var code = letter.charCodeAt('a');
  if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
    return true;
  }
  return false;
}


var s = 'A man, a plan, a canal: Panama';
var s = 'race a car';
var s = '0P';
console.log(isPalindrome(s));
