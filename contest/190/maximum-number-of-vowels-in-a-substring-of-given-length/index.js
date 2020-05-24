var maxVowels = function (s, k) {
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  var count = 0;
  for (var i = 0; i < k; i++) {
    var letter = s[i];
    if (vowels[letter]) {
      count++;
    }
  }

  var max = count;
  for (var i = 1; i < s.length; i++) {
    // k = 3
    // 1 => lastIndex: 3, prevIndex: 0
    // 2 => lastIndex: 4, prevIndex: 1
    // 3 => lastIndex: 5, prevIndex: 2
    // i => lastIndex: k + i - 1, prevIndex: i - 1

    var lastLetter = s[k + i - 1];
    var prevLetter = s[i - 1];

    if (vowels[lastLetter]) {
      count = count + 1;
    }

    if (vowels[prevLetter]) {
      count = count - 1;
    }

    max = Math.max(max, count);
  }

  return max;
};

// 3
var s = 'abciiidef';
var k = 3;

// 2
var s = 'aeiou';
var k = 2;

// 2
var s = 'leetcode';
var k = 3;

// 0
var s = 'rhythms';
var k = 4;

// 1
var s = 'tryhard';
var k = 4;

// 7
var s = 'ibpbhixfiouhdljnjfflpapptrxgcomvnb';
var k = 33;

console.log(maxVowels(s, k));
