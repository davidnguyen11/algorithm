// https://leetcode.com/problems/moving-average-from-data-stream
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.array = [];
  this.left = 0;
  this.right = 0;
  this.counter = 0;
  this.acc = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  const self = this;

  self.array.push(val);
  self.acc += val;
  self.right++;
  self.counter++;

  if (self.counter > self.size) {
    self.left++;
    self.counter--;
    self.acc -= self.array.shift();
  }

  return self.acc / self.counter;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */