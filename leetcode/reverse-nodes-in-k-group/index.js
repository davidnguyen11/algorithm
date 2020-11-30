// https://leetcode.com/problems/reverse-nodes-in-k-group/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;
  const arr = [];
  let pHead = { ...head };

  while (pHead) {
    arr.push(pHead.val);
    pHead = pHead.next;
  }
  let count = 0;
  let temp = [];
  let tempIndex = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    tempIndex.push(i);
    count++;

    if (count === k) {
      for (let j = 0; j < k; j++) {
        arr[tempIndex[j]] = temp[k - j - 1];
      }
      temp = [];
      tempIndex = [];
      count = 0;
    }
  }

  let result = {
    val: arr[arr.length - 1],
    next: null,
  };

  for (let i = arr.length - 2; i >= 0; i--) {
    const node = { val: arr[i], next: null };
    let temp = { ...result };
    result = node;
    result.next = temp;
  }

  return result;
};