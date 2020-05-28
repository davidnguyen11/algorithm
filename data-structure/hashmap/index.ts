class HashNode<T> {
  key: string;
  value: T;
  next: HashNode<T>;

  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

const LOAD_FACTOR = 0.75;
const CAPACITY = 16;

class HashMap<T> implements IHashMap {
  length: number;
  capacities: number;
  buckets: HashNode<T>[];

  constructor() {
    this.length = 0;
    this.capacities = CAPACITY;
    this.buckets = [];
  }

  public size(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  private hashCode(key: string): number {
    let h;
    for (let i = 0; i < key.length; i++) {
      h = Math.imul(31, h) + key.charCodeAt(i) | 0;
    }
    return h;
  }

}

interface IHashMap {
  size: () => number;
  isEmpty: () => boolean;
  get: () => void;
  put: () => void;
  containsKey: () => boolean;
}
