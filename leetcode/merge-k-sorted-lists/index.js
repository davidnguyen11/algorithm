var { PriorityQueue } = require('p-queue-ts');

// https://leetcode.com/problems/merge-k-sorted-lists/
var mergeKLists = function (lists) {
  var n = lists.length;
  if (n === 0) return null;

  const p = new PriorityQueue();

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


var node1 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5
    }
  },
};

var node2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4
    }
  },
};

var node3 = {
  val: 2,
  next: {
    val: 6,
  },
};

var lists = [node1, node2, node3];

console.log(mergeKLists(lists));
