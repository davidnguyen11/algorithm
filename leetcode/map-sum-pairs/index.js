// https://leetcode.com/problems/map-sum-pairs/
/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  // store all keywords in array to search prefix using startWith function of JS
  // hash map to store key and weight
  this.keywords = []; // another way is to do that is using Trie to build the keywords tree
  this.table = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  if (!this.table[key]) {
    this.keywords.push(key);
  }
  this.table[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  const listKeys = [];
  for (let i = 0; i < this.keywords.length; i++) {
    if (this.keywords[i].startsWith(prefix)) {
      listKeys.push(this.keywords[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < listKeys.length; i++) {
    sum += this.table[listKeys[i]];
  }
  return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */