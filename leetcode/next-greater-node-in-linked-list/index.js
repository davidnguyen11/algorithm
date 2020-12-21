// https://leetcode.com/problems/next-greater-node-in-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  if (!head) return [];

  let pHead = { ...head };
  const array = [];

  while (pHead) {
    array.push(pHead.val);
    pHead = pHead.next;
  }

  const length = array.length;
  const result = [];
  let num;
  let existingGreater = false;

  for (let i = 0; i < length; i++) {
    num = array[i];
    existingGreater = false;

    for (let j = i + 1; j < length; j++) {
      if (num < array[j]) {
        result.push(array[j]);
        existingGreater = true;
        break;
      }
    }

    if (!existingGreater) {
      result.push(0);
    }
  }

  return result;
};

// [2,1,5]
// [2,7,4,3,5]
// [1,7,5,1,9,2,5,1]
// []
// [1]