// https://leetcode.com/problems/flatten-nested-list-iterator/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
function helper(arr, ans) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].isInteger()) {
      helper(arr[i].getList(), ans);
    } else {
      ans.push(arr[i].getInteger());
    }
  }
}

var NestedIterator = function (nestedList) {
  const flattenArray = [];
  helper(nestedList, flattenArray);
  this.flattenArray = flattenArray;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  const self = this;
  return self.flattenArray.length ? true : false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  const self = this;
  if (!self.hasNext()) return null;
  return self.flattenArray.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
