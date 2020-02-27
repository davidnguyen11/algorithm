/**
 * Initialize your data structure here.
 */
var Trie = function() {
  var self = this;
  self.children = []
  for (var i = 0; i < 26; i++) {
    self.children.push(undefined);
  }
  self.isEndWord = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  var self = this;
  for (var i = 0; i < word.length; i++) {
    var index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (!self.children[index]) {
      self.children[index] = new Trie();
    }
    self = self.children[index];
  }
  self.isEndWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  var self = this;
  for (var i = 0; i < word.length; i++) {
    var index  = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (!self.children[index]) {
      return false;
    }
    self = self.children[index];
  }
  return self && self.isEndWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  var self = this;
  for (var i = 0; i < prefix.length; i++) {
    var index = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0)
    if (!self.children[index]) {
      return false;
    }
    self = self.children[index];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */