// https://leetcode.com/problems/reverse-linked-list/
var reverseList = function (head) {
  var ans = null;

  while (head) {
    var node = {
      val: head.val,
      next: null,
    };

    if (!ans) {
      ans = node;
    } else {
      node.next = { ...ans };
      ans = node;
    }

    head = head.next;
  }

  return ans;
};

// recursion
var reverseList = function (head) {
  var ans = null;
  function helper(head) {
    if (!head) return;

    var node = {
      val: head.val,
      next: null,
    };

    if (!ans) {
      ans = node;
    } else {
      node.next = { ...ans };
      ans = node;
    }

    helper(head.next);
  }

  helper(head);
  return ans;
};

var node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(node));
