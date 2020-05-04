// https://leetcode.com/problems/iterator-for-combination/
var CombinationIterator = function (characters, combinationLength) {
  var self = this;
  self.ans = [];

  function dfs(str, start, curr) {
    if (curr.length === combinationLength) {
      self.ans.unshift(curr.join(''));
    }

    var visited = new Set();
    var letter;

    for (var i = start; i < str.length; i++) {
      letter = str[i];
      if (visited.has(letter)) continue;

      curr.push(letter);
      visited.add(letter);

      dfs(str, i + 1, curr);

      curr.pop();
    }
  }

  dfs(characters, 0, []);
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  var self = this;
  return self.ans.pop();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  var self = this;
  return self.ans.length || false;
};

var iterator = new CombinationIterator('abc', 2);
console.log(iterator.next()); // returns "ab"
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "ac"
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "bc"
console.log(iterator.hasNext()); // returns false
