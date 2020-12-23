// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const removeIndexes = [];
  const parentheses = [];
  let ans = '';
  let letter;
  const length = s.length;

  for (let i = 0; i < length; i++) {
    letter = s[i];

    if (letter !== ')' && letter !== '(') continue;

    if (letter === ')' && parentheses[parentheses.length - 1] === '(') {
      parentheses.pop();
      removeIndexes.pop();
    } else {
      parentheses.push(letter);
      removeIndexes.push(i);
    }
  }

  const removeChar = new Set(removeIndexes);

  for (let i = 0; i < length; i++) {
    if (!removeChar.has(i)) {
      ans += s[i];
    }
  }
  return ans;
};

var s = "lee(t(c)o)de)"
var s = 'a)b(c)d';
var s = "))(("
var s = "(a(b(c)d)"
var s = "((a(b(c)d)"
var s = "((a(b(c)d))))"
var s = "))()()"

console.log(minRemoveToMakeValid(s));
