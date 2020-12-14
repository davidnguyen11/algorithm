// https://leetcode.com/problems/map-sum-pairs/
/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  // store all keywords in array to search prefix using startWith function of JS
  // hash map to store key and weight
  // this.keywords = []; // another way is to do that is using Trie to build the keywords tree
  this.table = {};
  this.trie = new Trie();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.trie.insert(key);
  this.table[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  // const listKeys = [];
  // for (let i = 0; i < this.keywords.length; i++) {
  //   if (this.keywords[i].startsWith(prefix)) {
  //     listKeys.push(this.keywords[i]);
  //   }
  // }

  const listKeys = this.trie.searchByPrefix(prefix);

  let sum = 0;
  for (let i = 0; i < listKeys.length; i++) {
    if (this.table[listKeys[i]]) {
      sum += this.table[listKeys[i]];
    }
  }
  return sum;
};

function Trie() {
  this.children = {};
  this.isEndWord = false;
}

Trie.prototype.insert = function (word) {
  let self = this;
  for (const item of word) {
    if (!self.children[item]) {
      self.children[item] = new Trie();
    }
    self = self.children[item];
  }
  self.isEndWord = true;
}

Trie.prototype.searchByPrefix = function (prefix) {
  let self = this;

  for (const c of prefix) {
    if (self.children[c]) {
      self = self.children[c];
    }
  }

  const ans = [];
  self.getAutoComplete(prefix, ans);
  return ans;
}

Trie.prototype.getAutoComplete = function (c, ans) {
  var self = this;
  if (self.isEndWord) {
    ans.push(c);
  }

  for (var key in self.children) {
    if (self.children[key]) {
      self.children[key].getAutoComplete(c + key, ans);
    }
  }
}

var t = new Trie();
t.insert('app');
t.insert('apple')
t.searchByPrefix('app');

console.log(t.children);
