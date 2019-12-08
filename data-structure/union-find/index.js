/**
 * Union & Find
 */
class DisjointSet {
  constructor(parent) {
    this.parent = parent;
    this.originParent = this.parent.map(item => item);
  }

  /**
   * DFS
   * To find which component a particular element belongs to find
   * the root of that component by following the parent nodes until
   * a self loop is reached (a node whose parent is itself)
   */
  find(index) {
    const stk = [this.parent[index]];

    while (stk.length > 0) {
      let idx = stk.pop();
      if (this.parent[idx] === this.originParent[idx]) {
        return idx;
      }
      stk.push(this.parent[idx]);
    }
  }

  /**
   * To unify 2 elements find which are the root nodes of each component
   * and if the root nodes are different make one of the root nodes
   * be the parent of the other
   */
  union(index1, index2) {
    const idx1 = this.find(index1);
    const idx2 = this.find(index2);
    this.parent[idx2] = idx1;
  }

  /**
   * Recursion
   * To find which component a particular element belongs to find
   * the root of that component by following the parent nodes until
   * a self loop is reached (a node whose parent is itself)
   */
  findWithRecursion(index) {
    if (this.parent[index] === this.originParent[index]) {
      return index;
    }
    return this.findWithRecursion(this.parent[index]);
  }

  /**
   * To unify 2 elements find which are the root nodes of each component
   * and if the root nodes are different make one of the root nodes
   * be the parent of the other
   */
  unionWithRecursion(index1, index2) {
    const idx1 = this.findWithRecursion(index1);
    const idx2 = this.findWithRecursion(index2);
    this.parent[idx2] = idx1;
  }
}

var als = ['great', 'good', 'cool', 'fine', 'drama', 'acting'];
var mapIndex = {};
var parent = als.map((item, index) => {
  mapIndex[item] = index;
  return index;
});
var s = new DisjointSet(parent); // [ 3, 0, 0, 3, 4, 4 ]
s.union(mapIndex['great'], mapIndex['good']);
s.union(mapIndex['great'], mapIndex['cool']);
s.union(mapIndex['fine'], mapIndex['good']);
s.union(mapIndex['drama'], mapIndex['acting']);
console.log(s.parent);

// var als = ['a', 'b', 'c'];
// var mapIndex = {};
// var parent = als.map((item, index) => {
//   mapIndex[item] = index;
//   return index;
// });
// var s = new DisjointSet(parent); // [0, 0, 0]
// s.union(mapIndex['a'], mapIndex['b']);
// s.union(mapIndex['b'], mapIndex['c']);
// console.log(s.parent);


