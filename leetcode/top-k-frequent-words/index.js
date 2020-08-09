// https://leetcode.com/problems/top-k-frequent-words/
var topKFrequent = function (words, k) {
  var counter = {};
  var visited = {};
  var n = words.length;
  var uniqueWords = [];

  for (var i = 0; i < n; i++) {
    var key = words[i];
    counter[key] = counter[key] || 0;
    counter[key]++;

    if (visited[key] === undefined) {
      uniqueWords.push(key);
      visited[key] = true;
    }
  }

  uniqueWords.sort((a, b) => {
    // If two words have the same frequency, then the word with the lower alphabetical order comes first.
    if (counter[b] === counter[a]) {
      if (a < b) {
        return -1;
      }
      return 0;
    }

    return counter[b] - counter[a];
  });

  var ans = [];

  for (var i = 0; i < k; i++) {
    var key = uniqueWords[i];
    ans.push(key);
  }

  return ans;
};

var words = [
  'the',
  'day',
  'is',
  'sunny',
  'the',
  'the',
  'the',
  'sunny',
  'is',
  'is',
];
var k = 4;

var words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
var k = 3;

console.log(topKFrequent(words, k));
