// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let pHead = { ...head };

  while (pHead) {
    length++;
    pHead = pHead.next;
  }

  const actualN = length - n + 1;

  // first element
  if (actualN === 1) {
    return head.next;
  }

  // last element
  let tail = head;
  if (actualN === length) {
    while (tail.next.next) {
      tail = tail.next;
    }
    tail.next = null;
    return head;
  }

  // middle element
  let count = 0;

  while (count <= actualN) {
    count++;

    if (count + 1 === actualN && tail.next) {
      tail.next = tail.next.next;
      break;
    }
    tail = tail.next;
  }

  return head;
};

// [1,2,3,4,5] => head
// 2 => n