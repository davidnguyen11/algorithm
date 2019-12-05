/**
 * Using doubly-linkedlist
 * Drawbacks
 * - We actually don't use the `this.prev`
 * - It causes wasting of memory to store `prev` pointer
 */
class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      const oldTail = this.tail;
      this.tail.next = node;
      this.tail = this.tail.next;
      this.tail.prev = oldTail;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return;
    const result = this.head;
    this.head.next.prev = null;
    this.head = this.head.next;
    this.size--;
    return result.data;
  }

  elements() {
    if (!this.head) return [];
    const result = [];
    let head = this.head;
    while (head) {
      result.push(head.data);
      head = head.next;
    }
    return result;
  }
}

const q = new Queue();

q.enqueue(1); // first
q.enqueue(2); // second
q.enqueue(3); // third
q.enqueue(4); // forth
console.log('size', q.size);
console.log(q.elements());

const d1 = q.dequeue();
console.log('dequeue 1', d1);
console.log('size', q.size);
console.log(q.elements());

const d2 = q.dequeue();
console.log('dequeue 2', d2);
console.log('size', q.size);
console.log(q.elements());