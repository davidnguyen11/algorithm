/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if ((!s && t) || (!s && !t)) return true;
  if (s && !t) return false;

  var initValue = false;
  for (var c = 0; c < t.length; c++) {
    if (s[0] === t[c]) {
      initValue = true;
      break;
    }
  }

  var D = [];
  for (var i = 0; i < s.length; i++) {
    D[i] = [];
  }

  for (var c = 0; c < t.length; c++) {
    D[0][c] = initValue;
  }

  for (var r = 1; r < s.length; r++) {
    for (var c = 1; c < t.length; c++) {
      if (s[r] === t[c]) {
        D[r][c] = D[r - 1][c - 1];
      } else {
        D[r][c] = D[r][c - 1];
      }
    }
  }
  const result = D[s.length - 1][t.length - 1];
  return (result === undefined || result === false) ? false : true;
};

// var s = 'abc';
// var t = 'ahbgdc'; // true

// var s = 'axc';
// var t = 'ahbgdc'; // false

// var s = '';
// var t = 'ahbgdc'; // true

// var s = 'abc';
// var t = ''; // false

// var s = '';
// var t = ''; // true

// var s = 'acb';
// var t = 'ahbgdc'; // false

// var s = 'b';
// var t = 'c'; // false

var s = "twn";
var t = "xtxxwxxn"; // true

var result = isSubsequence(s, t);
console.log(result);
