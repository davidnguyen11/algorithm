class Queue {
  constructor() {
    this.size = 0;
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
    this.size = this.size + 1;
  }

  dequeue() {
    if (this.queue.length === 0) {
      return;
    }

    this.size = this.size - 1;
    const result = this.queue[0];
    this.queue[0] = undefined;
    this.queue = this.elements();
    return result;
  }

  elements() {
    const result = [];
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i]) {
        result.push(this.queue[i]);
      }
    }
    return result;
  }
}

module.exports = {
  Queue,
};

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log('enqueue');
console.log(q.elements());
console.log(q.size);

console.log('dequeue');
console.log(q.dequeue());
console.log(q.elements());
console.log(q.size);

console.log('dequeue');
console.log(q.dequeue());
console.log(q.elements());
console.log(q.size);

console.log('enqueue');
q.enqueue(4);
console.log(q.elements());
console.log(q.size);