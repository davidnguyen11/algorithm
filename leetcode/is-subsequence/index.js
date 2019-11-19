/**
 * @url https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if ((!s && t) || (!s && !t)) return true;
  if (s && !t) return false;

  var mapping = {};
  var sIndexes = [];
  for (var i = 0; i < s.length; i++) {
    if (mapping[s[i]] === undefined) {
      mapping[s[i]] = i;
    }
    sIndexes.push(mapping[s[i]]);
  }

  var indexes = [];
  for (var j = 0; j < t.length; j++) {
    if (mapping[t[j]] !== undefined) {
      indexes.push(mapping[t[j]]);
    }
  }

  if (indexes.length < s.length) return false;

  var sIndexesMap = {};
  var sIndexesArray = [];
  for (var i = 0; i < sIndexes.length; i++) {
    if (sIndexesMap[sIndexes[i]] === undefined) {
      sIndexesMap[sIndexes[i]] = sIndexes[i];
      sIndexesArray.push(sIndexes[i]);
    }
  }

  var indexesMap = {};
  var indexesArray = [];
  for (var i = 0; i < indexes.length; i++) {
    if (indexesMap[indexes[i]] === undefined) {
      indexesMap[indexes[i]] = indexes[i];
      indexesArray.push(indexes[i]);
    }
  }

  for (var i = 0; i < indexesArray.length; i++) {
    if (sIndexesArray[i] !== indexesArray[i]) {
      return false;
    }
  }

  return true;
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

// var s = 'twn';
// var t = 'xtxxwxxn'; // true

var s = 'leetcode';
var t = 'yyyyyyyyylyyyeyyyeyyyeyyyytyyyycyyyoyyydyyyye';

// var s = 'leet';
// var t = 'leeete';

var result = isSubsequence(s, t);
console.log(result);
