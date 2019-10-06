const { Node, LinkedList } = require('../doubly-linkedlist');

class Queue extends LinkedList {
  constructor() {
    super();
  }

  enqueue(data) {
    this.addLast(data);
  }

  dequeue() {
    if (!this.tail) return;
    const result = this.tail.data;
    this.removeLast();
    return result;
  }

  size() {
    return this.getSize();
  }
}

const queue = new Queue();

queue.enqueue(1); // first
queue.enqueue(2); // second
queue.enqueue(3); // third
queue.enqueue(4); // forth

console.log('dequeue', queue.dequeue());
console.log();
queue.traverse();