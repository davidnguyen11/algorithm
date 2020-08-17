var { PriorityQueue } = require('p-queue-ts');
// https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function (l1, l2) {
  var p = new PriorityQueue();

  var lists = [l1, l2];

  var n = lists.length;

  for (var i = 0; i < n; i++) {
    var node = lists[i];

    while (node) {
      p.push(node.val);
      node = node.next;
    }
  }

  var ans = null;

  while (!p.empty()) {
    var val = p.pop();
    var newNode = { val, next: null };
    if (!ans) {
      ans = newNode;
    } else {
      var temp = { ...ans };
      newNode.next = temp;
      ans = newNode;
    }
  }

  return ans;
};

var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4
    },
  },
};

var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4
    },
  },
};

console.log(mergeTwoLists(l1, l2));
