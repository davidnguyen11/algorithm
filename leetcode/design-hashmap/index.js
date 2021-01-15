// https://leetcode.com/problems/design-hashmap
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.hashMap = new HashMap();
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const self = this;
  self.hashMap.add(key, value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const self = this;
  const val = self.hashMap.get(key);
  return val === null ? -1 : val;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const self = this;
  self.hashMap.remove(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
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
    const hash = this.hashCode(`${key}`);
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

  remove(key) {
    const index = this.getBucketIndex(key);
    let head = this.buckets[index];

    if (!head) return;

    let pHead = head;

    // if the node needs to be deleted at the begining
    if (head.key === key) {
      this.buckets[index] = head.next;
      return;
    }

    while (pHead && pHead.next) {
      if (pHead.next.key === key) {
        pHead.next = pHead.next.next;
      }
      pHead = pHead.next;
    }

    this.buckets[index] = head;
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