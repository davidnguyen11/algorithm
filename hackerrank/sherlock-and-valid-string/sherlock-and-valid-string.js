// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
function isValid(s) {
  var freq = {};

  for (var i = 0; i < s.length; i++) {
    var letter = s[i];

    if (freq[letter] === undefined) {
      freq[letter] = 1;
    } else {
      freq[letter]++;
    }
  }

  var keys = Object.keys(freq);

  if (keys.length === 1) {
    return 'YES';
  }

  var visted = {};

  var freqAppearTheMost = 0;

  for (var i = 0; i < keys.length; i++) {
    var letter = keys[i];

    if (visted[freq[letter]] === undefined) {
      visted[freq[letter]] = 1;
    } else {
      visted[freq[letter]]++;
    }

    if (visted[freq[letter]] > freqAppearTheMost) {
      freqAppearTheMost = freq[letter];
    }
  }

  var letterFreqDiffFromMost = 0;

  for (var i = 0; i < keys.length; i++) {
    var letter = keys[i];
    if (freq[letter] !== freqAppearTheMost) {
      letterFreqDiffFromMost++;
    }
  }

  if (letterFreqDiffFromMost > 1) {
    return 'NO';
  }

  // If there is no freq diff => that means all letters appear with the same freq
  // OR
  // If there is a diff, make sure the diff minus 1 (1 remove action) mod freqAppearTheMost = 0
  // - means after remove 1 letter and all freqs are equaled
  if (letterFreqDiffFromMost === 0 || (letterFreqDiffFromMost - 1) % freqAppearTheMost === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

// var s = 'abcc'; // YES
// var s = 'abbccd'; // NO
// var s = 'aabbcd'; // NO
// var s = 'aabbccddeefghi'; // NO
// var s = 'abcdefghhgfedecba'; // YES
// var s = 'aaa';
// var s = 'aabbccdd';
var result = isValid(s);
console.log(result);
