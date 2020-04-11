/**
 * initialize your data structure here.
 */
var Node = function (val) {
  var self = this;
  self.val = val;
  self.next = null;
}

var MinStack = function () {
  var self = this;
  self.head = null;
  self.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  var self = this;
  var node = new Node(x);

  if (!self.head) {
    self.head = node;
    self.min = node;
  } else {
    var temp = { ...self.head };
    node.next = temp;
    self.head = node;

    if (self.min.val >= x) {
      var tempSupport = { ...self.min };
      var spNode = new Node(x);
      spNode.next = tempSupport;
      self.min = spNode;
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  var self = this;
  if (!self.head) return;

  if (self.head.val === self.min.val) {
    self.min = self.min.next;
  }

  self.head = self.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  var self = this;
  if (!self.head) return;

  return self.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  var self = this;
  if (!self.min) return;

  return self.min.val;
};

// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin());

var minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
