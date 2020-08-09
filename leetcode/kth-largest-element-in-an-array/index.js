// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Solution 1: using built-in sort
// var findKthLargest = function(nums, k) {
//   nums.sort((a, b) => b - a);
//   return nums[k - 1];
// };

var findKthLargest = function (nums, k) {
  var q = new PriorityQueue();
  for (var i = 0; i < nums.length; i++) {
    q.push(nums[i]);
  }

  var count = 0;

  while (q._queue.length) {
    var temp = q.pop();
    count++;

    if (count === k) {
      return temp;
    }
  }
  return;
};

var nums = [3, 2, 1, 5, 6, 4];
var k = 2;
console.log(findKthLargest(nums, k));

class PriorityQueue {
  constructor(comparator) {
    this._queue = [];
    this._comparator = comparator;
  }
  /**
   * Inserts the specified element into this priority queue.
   * Everytime adding new element to queue, the queue is started "sift up" to rebuild the heap
   * @param value
   */
  push(value) {
    this._queue.push(value);
    let pos = this._queue.length - 1;
    while (
      pos !== 0 &&
      this._compare(this._queue[this._parentOf(pos)], this._queue[pos])
    ) {
      this._swap(pos, this._parentOf(pos));
      pos = this._parentOf(pos);
    }
  }
  /**
   * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
   */
  top() {
    return this._queue.length > 0 ? this._queue[0] : null;
  }
  /**
   * Retrieves and removes the head of this queue, or returns null if this queue is empty.
   * Everytime pop element from queue, the queue is started "sift down" to rebuild the heap
   */
  pop() {
    if (this._queue.length === 0) {
      return null;
    }
    const item = this._queue[0];
    this._queue[0] = this._queue[this._queue.length - 1];
    this._swap(0, this._queue.length - 1);
    this._queue.pop();
    this._heapify(0);
    return item;
  }
  /**
   * Returns the number of elements in this collection.
   */
  size() {
    return this._queue.length;
  }
  /**
   * Checks whether the queue is empty.
   */
  empty() {
    return this._queue.length === 0;
  }
  /**
   * Returns an array containing all of the elements in this queue.
   */
  toArray() {
    return [...this._queue];
  }
  /**
   * Compare parent value and children value and swap them if conditions are satisfied
   * @param index
   */
  _heapify(index) {
    const mid = Math.floor(this._queue.length / 2);
    let childIndex1;
    let childIndex2;
    let swapIndex;
    while (index <= mid - 1) {
      childIndex1 = 2 * index + 1;
      childIndex2 = 2 * index + 2;
      swapIndex = childIndex1;
      if (this._compare(this._queue[childIndex1], this._queue[childIndex2])) {
        swapIndex = childIndex2;
      }
      if (this._compare(this._queue[index], this._queue[swapIndex])) {
        this._swap(index, swapIndex);
      }
      index = swapIndex;
    }
  }
  /**
   * Swap 2 elememts
   * @param index1
   * @param index2
   */
  _swap(index1, index2) {
    const temp = this._queue[index1];
    this._queue[index1] = this._queue[index2];
    this._queue[index2] = temp;
  }
  /**
   * Compare 2 elements
   * @param item1
   * @param item2
   */
  _compare(item1, item2) {
    if (this._comparator) {
      return this._comparator(item1, item2);
    }
    return item1 < item2;
  }
  /**
   * Get parent's index of the current element
   * @param position
   */
  _parentOf(position) {
    return Math.floor((position - 1) / 2);
  }
}
