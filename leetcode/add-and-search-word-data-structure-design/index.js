/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  var self = this;
  self.children = [];
  for (let i = 0; i < 26; i++) {
    self.children.push(undefined);
  }
  self.isEndWord = false;
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  var self = this;
  for (let i = 0; i < word.length; i++) {
    let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (!self.children[index]) {
      self.children[index] = new WordDictionary();
    }
    self = self.children[index];
  }
  self.isEndWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * BFS version
 * @param {string} word
 * @return {boolean}
 */
// WordDictionary.prototype.search = function(word) {
//   var self = this;

//   function helper(node, word, i) {
//     if (!node) return false;

//     if (i === word.length) {
//       return node.isEndWord;
//     }

//     var letter = word[i];

//     if (letter === '.') {
//       for (var k = 0; k < node.children.length; k++) {
//         if (helper(node.children[k], word, i + 1)) {
//           return true;
//         }
//       }
//     } else {
//       var index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
//       if (helper(node.children[index], word, i + 1)) {
//         return true;
//       }
//     }
//     return false;
//   }

//   return helper(self, word, 0);
// };

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * DFS version
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  var self = this;

  if (!word) {
    return self.isEndWord;
  }

  var letter = word[0];

  if (letter === '.') {
    for (var i = 0; i < self.children.length; i++) {
      if (self.children[i] && self.children[i].search(word.substring(1))) {
        return true;
      }
    }
  } else {
    var index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
    if (self.children[index] && self.children[index].search(word.substring(1))) {
      return true;
    }
  }
  return false;
}

// function bfs(node, word, i) {
//   if (!node) return false;

//   if (i === word.length) return node.isEndWord;

//   var letter = word[i];

//   if (letter === '.') {
//     for (let k = 0; k < node.children.length; k++) {
//       if (bfs(node.children[k], word, i + 1)) {
//         return true;
//       }
//     }
//   } else if (letter) {
//     var index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
//     if (bfs(node.children[index], word, i + 1)) {
//       return true;
//     }
//   }
//   return false;
// }

var obj = new WordDictionary()
// obj.addWord('bad');
// obj.addWord('dad');
// obj.addWord('mad');
// obj.addWord('carry');
// console.log('.ad', obj.search('.ad')); // true
// console.log('ca..y', obj.search('ca..y')); // true
// console.log('ca.dy', obj.search('ca.dy')); // false
// console.log('b..', obj.search('b..')); // true

obj.addWord('a');
obj.addWord('a');
console.log('a', obj.search('.')); // true
console.log('a', obj.search('a')); // true
console.log('aa', obj.search('aa')); // false
console.log('a', obj.search('a')); // true
console.log('.a', obj.search('.a')); // false
console.log('a.', obj.search('a.')); // false

// obj.addWord('at');
// obj.addWord('and');
// obj.addWord('an');
// obj.addWord('add');
// obj.addWord('bat');
// console.log('an.', obj.search('an.')); // true
// console.log('a.', obj.search('a.')); // true
// console.log('.at', obj.search('.at')); // true
