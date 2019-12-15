/**
 * url: https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  var stk = [];
  var arr = s.split('');

  var open = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  var close = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  var c;
  while (arr.length) {
    c = arr.shift();
    if (open[c]) {
      stk.push(c);
    }

    if (close[c]) {
      var o = stk.pop();
      if (o !== close[c]) {
        return false;
      }
    }
  }
  if (stk.length)
    return false;
  return true;
};

var s = '()'; // true
// var s = '()[]{}'; // true
// var s = '(]'; // false
// var s = '([)]'; // false
// var s = '{[]}'; // true
// var s = '{[()]}'; // true
// var s = '{[((]}'; // false
// var s = '['; // false
// var s = '(('; // false
// var s = '))'; // false
// var s = '([]'; // false
// var s = ''; // true

console.log(isValid(s));