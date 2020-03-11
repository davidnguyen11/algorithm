/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null;
  var arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return helper(arr, 0, arr.length - 1);
};

function helper(arr, start, end) {
  if (!arr || arr.length === 0 || start > end) return null;

  if (start === end) {
    return {
      val: arr[start],
      left: null,
      right: null,
    };
  }

  var mid = Math.floor((start + end) / 2);

  return {
    val: arr[mid],
    left: helper(arr, start, mid - 1),
    right: helper(arr, mid + 1, end),
  };
}

// [-10, -3, 0, 5, 9]
var list = {
  val: -10,
  next: {
    val: -3,
    next: {
      val: 0,
      next: {
        val: 5,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
};

// [-10, -3, -2, 0, 5, 9]
// [-10, -3, 0, 5, 9];
// [1, 2];
// null;
// [1];
console.log(sortedListToBST(list));
