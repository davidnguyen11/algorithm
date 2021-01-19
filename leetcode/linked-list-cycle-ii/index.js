// https://leetcode.com/problems/linked-list-cycle-ii
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;

  let p1 = head;
  let p2 = head;

  while (p1.next && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      p1 = head;

      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      if (p2) return p2;
    }
  }
  return null;
};