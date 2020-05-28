class HashNode<T> {
  key: string;
  value: T;
  next: HashNode<T> | null;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

const LOAD_FACTOR = 0.75;
const CAPACITY = 16;

class HashMap<T> implements IHashMap<T> {
  length: number;
  capacities: number;
  buckets: HashNode<T>[] | null[];

  constructor() {
    this.length = 0;
    this.capacities = CAPACITY;
    this.buckets = [];

    this.initBuckets();
  }

  public put(key: string | number, value: T) {
    const keyStr = key.toString();
    const index = this.getBucketIndex(keyStr);
    let head = this.buckets[index];

    while (head) {
      if (head.key === keyStr) {
        head.value = value;
        return;
      }
      head = head.next;
    }

    this.length++;
    const node = new HashNode(keyStr, value);
    head = this.buckets[index];
    node.next = head;
    this.buckets[index] = node;

    if (this.shouldReHash()) {
      // clone current buckets
      // reset length
      // update size of bucket to double
      // init buckets with new size
      // insert data from clonet buckets to the current buckets
      const cloneBuckets = this.buckets;
      this.capacities = this.capacities * 2;
      this.length = 0;
      this.initBuckets();
      let bucket;

      for (let i = 0; i < cloneBuckets.length; i++) {
        bucket = cloneBuckets[i];

        while (bucket) {
          this.put(bucket.key, bucket.value);
          bucket = bucket.next;
        }
      }
    }
  }

  public get(key: string | number): T | null {
    const keyStr = key.toString();
    const index = this.getBucketIndex(keyStr);
    let head = this.buckets[index];

    while (head) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }

    return null;
  }

  public containsKey(key: string | number) {
    const keyStr = key.toString();
    const index = this.getBucketIndex(keyStr);
    let head = this.buckets[index];

    while (head) {
      if (head.key === key) {
        return true;
      }
      head = head.next;
    }
    return false;
  }

  public size(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  private getBucketIndex(key: string) {
    const hash = this.hashCode(key);
    const index = hash % this.capacities;
    return index;
  }

  private initBuckets() {
    for (let i = 0; i < this.capacities; i++) {
      this.buckets.push(null as never);
    }
  }

  private hashCode(key: string): number {
    let h: number = 0;
    for (let i = 0; i < key.length; i++) {
      h = (Math.imul(31, h) + key.charCodeAt(i)) | 0;
    }
    return h;
  }

  private shouldReHash() {
    return this.length / this.capacities > LOAD_FACTOR;
  }
}

interface IHashMap<T> {
  size: () => number;
  isEmpty: () => boolean;
  get: (key: string | number) => T | null;
  put: (key: string | number, value: T) => void;
  containsKey: (key: string | number) => boolean;
}

const hash = new HashMap<number>();
hash.put('a', 1);
hash.put('b', 2);
hash.put('c', 4);
hash.put('d', 5);
hash.put('e', 6);
hash.put('f', 7);
hash.put('g', 8);
hash.put('h', 9);
hash.put('i', 10);

console.log('i', hash.get('i'));
console.log(hash.size());
