// https://leetcode.com/problems/design-search-autocomplete-system/
var AutocompleteSystem = function (sentences, times) {
  var self = this;
  self.map = {};
  self.keyword = '';
  self.ans = [];
  self.trie = new Trie();
  var n = sentences.length;

  for (var i = 0; i < n; i++) {
    var sentence = sentences[i];
    self.map[sentence] = times[i];
    self.trie.insert(sentence);
  }
};

AutocompleteSystem.prototype.input = function(c) {
  var self = this;

  switch(c) {
    case '#':
      if (!self.map[self.keyword]) {
        self.trie.insert(self.keyword);
      }
      self.save(self.keyword);
      self.reset();
      return [];
    default:
      self.keyword += c;
      self.ans = self.trie.search(self.keyword);

      var arr = [];
      for (var i = 0; i < self.ans.length; i++) {
        var sentence = self.ans[i];
        arr.push({ text: sentence, times: self.map[sentence] });
      }

      arr.sort((a, b) => {
        // if times are equal => use "localeCompare" to see which one comes first
        if (b.times === a.times) {
          return a.text.localeCompare(b.text);
        }
        return b.times - a.times;
      });

      // get top 3 results
      self.ans = arr.slice(0, 3).map(item => item.text);

      return self.ans;

  }
};

AutocompleteSystem.prototype.reset = function() {
  var self = this;
  self.keyword = '';
  self.ans = [];
}

AutocompleteSystem.prototype.save = function(sentence) {
  var self = this;
  self.map[sentence] = self.map[sentence] || 0;
  self.map[sentence]++;
}

function Trie() {
  var self = this;
  self.children = {};
  self.ans = [];
  self.isEndWord = false;
}

Trie.prototype.insert = function(sentence) {
  var self = this;
  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (!self.children[letter]) {
      self.children[letter] = new Trie();
    }
    self = self.children[letter];
  }
  self.isEndWord = true;
}

Trie.prototype.search = function(c) {
  var self = this;
  var n = c.length;
  const ans = [];

  for (var i = 0; i < n; i++) {
    var letter = c[i];

    if (!self.children[letter]) {
      return [];
    }

    self = self.children[letter];
  }

  self.getAutoComplete(c, ans);
  return ans;
}

Trie.prototype.getAutoComplete = function(c, ans) {
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

var sentences = ['i love you', 'island','ironman', 'i love leetcode'];
var times = [5, 3, 2, 2];

var obj = new AutocompleteSystem(sentences, times);

console.log('1111');
var param_1 = obj.input('i');
param_1 = obj.input(' ');
param_1 = obj.input('a');
param_1 = obj.input('#');

// input 2
console.log('2222');
param_1 = obj.input('i');
param_1 = obj.input(' ');
param_1 = obj.input('a');
param_1 = obj.input('#');

// input 3
console.log('3333');
param_1 = obj.input('i');
param_1 = obj.input(' ');
param_1 = obj.input('a');
param_1 = obj.input('#');