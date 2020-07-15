// https://leetcode.com/problems/permutation-in-string/
var checkInclusion = function (s1, s2) {
  var length1 = s1.length;
  var length2 = s2.length;
  var dict = {};
  var char;
  var count = 0;
  var i = 0;
  var state = {};

  for (var k = 0; k < length1; k++) {
    char = s1[k];
    dict[char] = dict[char] || 0;
    dict[char]++;
  }

  for (var j = 0; j < length2; j++) {
    state = {};
    count++;

    while (count === length1) {
      for (var o = i; o <= j; o++) {
        char = s2[o];
        state[char] = state[char] || 0;
        state[char]++;
      }

      for (const [key] of Object.entries(dict)) {
        if (state[key] !== dict[key]) {
          count--;
          break;
        }
      }

      if (count === length1) return true;

      i++;
    }
  }
  return false;
};

var s1 = 'ab';
var s2 = 'eidbaooo'; // true

// var s1 = 'ab';
// var s2 = 'eidboaoo'; // false

// var s1 = 'e';
// var s2 = 'eidboaoo';

// var s1 = 'hello';
// var s2 = 'ooolleoooleh'; // false

// var s1 = 'aab';
// var s2 = 'eidabaoaoo'; // true

// var s1 = "abcdxabcde"
// var s2 = "abcdeabcdx" // true



console.log(checkInclusion(s1, s2));
