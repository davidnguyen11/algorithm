/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  var arrC = s.split('');
  console.log(arrC);
  var result = 0;
  var mode = arrC[0];
  var prevMode;

  for (var i = 1; i < arrC.length; i++) {
    var c = arrC[i];

    if (c === prevMode) {
      result++;
    }

    if (c !== mode) {
      prevMode = mode;
      mode = c;
    }
  }

  return result;
};

var s = 'RLRRLLRLRL';
console.log(balancedStringSplit(s));