/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var s = x.toString();
  return helper(s, 0, s.length - 1);
};

function helper(x, i, j) {
  if (i >= j) {
    return true;
  }
  if (x[i] !== x[j]) {
    return false;
  }
  return helper(x, i + 1, j - 1);
}

var isPalindrome = function (x) {
  var s = x.toString();
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

var x = 121;
var x = 14541;
var x = 1;
var x = -121;
var x = 10;
var x = 11;
var x = 11111;

console.log(isPalindrome(x));