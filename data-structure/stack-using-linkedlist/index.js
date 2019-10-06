const { Node, LinkedList } = require('../doubly-linkedlist');

class Stack extends LinkedList {
  constructor() {
    super();
  }

  push(data) {
    this.addHead(data);
  }

  pop() {
    if (!this.head) return;
    const result = this.head.data;
    this.removeHead();
    return result;
  }

  size() {
    return this.getSize();
  }

  peek() {
    if (!this.head) return;
    return this.head.data;
  }
}

const stack = new Stack();
stack.push(1); // four
stack.push(2); // third
stack.push(4); // second
stack.push(3); // first

console.log('top value without removing', stack.peek());
console.log('size', stack.size());
stack.traverse();

