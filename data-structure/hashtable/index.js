/*
 * Array
 * - each element contains linked list
 * - linked list node: key, value & next (pointer)
 * number of bucket (initial number of buckets)
 * size (number of used buckets)
 */

class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.buckets = [];
    this.total = 10;
    this.size = 0;

    for (let i = 0; i < this.total; i++) {
      this.buckets.push(null);
    }
  }

  hashCode(s) {
    let h;

    for (let i = 0; i < s.length; i++) {
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }

    return h;
  }

  getBucketIndex(key) {
    const hash = this.hashCode(key);
    const index = hash % this.total;
    return index;
  }

  get(key) {
    const index = this.getBucketIndex(key);
    let head = this.buckets[index];

    while (head) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }
    return null;
  }

  add(key, value) {
    const index = this.getBucketIndex(key);
    let head = this.buckets[index];

    while (head) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.next;
    }

    this.size++;
    head = this.buckets[index];
    const node = new HashNode(key, value);
    node.next = head;
    this.buckets[index] = node;

    if (this.size / this.total > 0.7) {
      const cloneBuckets = this.buckets;
      this.total = this.total * 2;
      this.buckets = [];
      this.size = 0;

      for (let i = 0; i < this.total; i++) {
        this.buckets.push(null);
      }

      cloneBuckets.forEach((headNode) => {
        while (headNode) {
          this.add(headNode.key, headNode.value);
          headNode = headNode.next;
        }
      });
    }
  }
}

const hash = new HashMap();
hash.add('a', 1);
hash.add('b', 2);
hash.add('c', 4);
hash.add('d', 5);
hash.add('e', 6);
hash.add('f', 7);
hash.add('g', 8);
hash.add('h', 9);
hash.add('i', 10);

console.log('i', hash.get('i'));
console.log(hash.size);
console.log(hash.total);
