// https://leetcode.com/problems/search-suggestions-system/
const alphabets = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();

  for (let i = 0; i < products.length; i++) {
    const word = products[i];
    trie.insert(word);
  }

  const ans = [];
  let keyword = '';
  for (const char of searchWord) {
    keyword += char;
    const result = trie.search(keyword, 3);
    ans.push(result);
  }

  return ans;
};

function Trie() {
  const self = this;
  self.children = {};
  self.isEndWord = false;
}

Trie.prototype.insert = function (word) {
  let self = this;
  let code;

  for (const char of word) {
    code = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (!self.children[code]) {
      self.children[code] = new Trie();
    }
    self = self.children[code];
  }

  self.isEndWord = true;
}

Trie.prototype.search = function (keyword, limit) {
  let self = this;
  let code;
  const ans = [];

  for (const letter of keyword) {
    code = letter.charCodeAt(0) - 'a'.charCodeAt(0);
    if (!self.children[code]) {
      return [];
    }

    self = self.children[code];
  }

  self.getAutoComplete(keyword, ans, limit);
  return ans;
}

Trie.prototype.getAutoComplete = function (keyword, result, limit) {
  const self = this;

  if (result.length === limit) {
    return;
  }

  if (self.isEndWord) {
    result.push(keyword);
  }

  for (const key in self.children) {
    if (self.children[key]) {
      self.children[key].getAutoComplete(keyword + alphabets[key], result, limit);
    }
  }
}

var products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"]
var searchWord = "mouse"

console.log(suggestedProducts(products, searchWord));
