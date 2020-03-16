/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  var arr = [];
  permutation(s, 0, arr, '');
  return arr;
};

function permutation(s, i, arr, answer) {
  if (i === s.length) {
    arr.push(answer);
    return;
  }

  if (isNaN(s[i])) {
    permutation(s, i + 1, arr, answer + s[i].toLowerCase());
    permutation(s, i + 1, arr, answer + s[i].toUpperCase());
  } else {
    permutation(s, i + 1, arr, answer + s[i]);
  }
}
