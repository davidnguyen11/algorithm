class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return;
    const result = this.head.data;
    this.head = this.head.next;
    this.size--;
    return result;
  }

  peek() {
    if (!this.head) return;
    return this.head.data;
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

const stack = new Stack();
stack.push(1); // four
stack.push(2); // third
stack.push(4); // second
stack.push(3); // first
console.log('size 1 - ', stack.size);
console.log(stack.elements());

console.log('pop 1 - ', stack.pop());
console.log('size 2 - ', stack.size);
console.log(stack.elements());

stack.push(5); // first
console.log('size 3 - ', stack.size);
console.log(stack.elements());
