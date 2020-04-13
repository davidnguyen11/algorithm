class PriorityQueue {
  constructor(queue = []) {
    this.queue = queue;

    if (this.queue && this.queue.length > 0) {
      this._buildHeap();
    }
  }

  push(value) {
    this.queue.push(value);
    let parent = Math.floor(this.queue.length / 2) - 1;
    let position = this.queue.length - 1;

    while (this.queue[parent] < this.queue[position]) {
      this.swap(parent, position);
      position = parent;
      parent = Math.floor(position / 2);
    }
  }

  pop() {
    const num = this.queue.shift();
    this._buildHeap();
    return num;
  }

  top() {
    return this.queue[0];
  }

  /**
   * Swap method using XOR
   * @param {*} firstIndex
   * @param {*} secondIndex
   */
  swap(firstIndex, secondIndex) {
    this.queue[firstIndex] = this.queue[firstIndex] ^ this.queue[secondIndex];
    this.queue[secondIndex] = this.queue[firstIndex] ^ this.queue[secondIndex];
    this.queue[firstIndex] = this.queue[firstIndex] ^ this.queue[secondIndex];
  }

  _buildHeap() {
    const mid = Math.floor(this.queue.length / 2);
    for (let i = mid - 1; i >= 0; i--) {
      this._heapify(i);
    }
  }

  _heapify(index) {
    const mid = Math.floor(this.queue.length / 2);

    while (index <= mid - 1) {
      const childIndex1 = 2 * index + 1;
      const childIndex2 = 2 * index + 2;
      let swapIndex = childIndex1;

      if (this.queue[childIndex1] < this.queue[childIndex2]) {
        swapIndex = childIndex2;
      }

      if (this.queue[index] < this.queue[swapIndex]) {
        this.swap(index, swapIndex);
      }

      index = swapIndex;
    }
  }
}

module.exports = {
  PriorityQueue
};