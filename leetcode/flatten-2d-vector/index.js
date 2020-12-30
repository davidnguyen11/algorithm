// https://leetcode.com/problems/flatten-2d-vector/
/**
 * @param {number[][]} v
 */
var Vector2D = function (v) {
  this.array = [];

  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v[i].length; j++) {
      this.array.push(v[i][j]);
    }
  }
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
  const self = this;
  if (!self.hasNext()) return null;
  return self.array.shift();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  const self = this;
  return self.array.length ? true : false;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
