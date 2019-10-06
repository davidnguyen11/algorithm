/**
 * The node has 3 fields:
 * - data: the value
 * - next: the pointer points to next node
 * - prev: the pointer points to previous node
 * Example:
 * null <-> 37 <-> 99 <-> 12 <-> null
 */

const log = console.log;

class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  addLast(data) {
    if (!this.head) {
      this.addHead(data)
    } else {
      const node = new Node(data);
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  /**
   * Add node to the specific position in the list
   * @param data - the value of the node
   * @param position - the specific position of list
   * - first => insert to the head
   * - last
   * --- insert to the last node
   * --- update the tail
   * - middle
   */
  add(data, position = 0) {
    let head = this.head;

    // Fist position
    if (!head || position === 0) {
      this.addHead(data);
    } else {
      let index = 0;

      while (head) {
        head = head.next;
        index++;
        if (index === position) {
          break;
        }
      }

      // Last position
      if (!head) {
        this.addLast(data);
      } else {
        // Middle position
        const node = new Node(data);
        node.prev = head.prev;
        head.prev.next = node;
        node.next = head;
        head.prev = node;
        head = node;
      }
    }
  }

  removeHead() {
    if (this.head) {
      this.head = this.head.next;
      // need to update the prev of the new head
      this.head.prev = null;
    }
  }

  removeLast() {
    if (this.tail) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
  }

  getHead() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  traverse() {
    if (!this.head) return;
    let head = this.head;
    while (head) {
      log(head.data);
      head = head.next;
    }
  }

  traverseBackward() {
    let tail = this.tail;
    while (tail) {
      log(tail.data);
      tail = tail.prev;
    }
  }

  getSize() {
    let head = this.head;
    let count = 0;

    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }
}

module.exports = {
  Node,
  LinkedList,
};

// var list = new LinkedList();
// list.addHead(12); // third
// list.addHead(99); // second
// list.addHead(37); // first

// list.removeHead();

// list.add(88, 3);

// list.removeLast();
// list.traverse();
// log()
// list.traverseBackward();



