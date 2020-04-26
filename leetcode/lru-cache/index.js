// https://leetcode.com/problems/lru-cache/
var LRUCache = function (capacity) {
  var self = this;
  self.capacity = capacity;
  self.cache = {};
  self.keys = new List();
  return self;
};

LRUCache.prototype.get = function (key) {
  var self = this;
  if (!self.cache[key]) return -1;

  var node = self.cache[key];
  var result = self.cache[key].value;

  // Delete node based on reference here
  self.keys.remove(node);
  delete self.cache[key];
  self.put(key, result);

  return result;
};

LRUCache.prototype.put = function (key, value) {
  var self = this;

  if (self.cache[key]) {
    self.keys.remove(self.cache[key]);
  }

  if (self.keys.size === self.capacity) {
    var tail = self.keys.tail;
    self.keys.remove(tail);

    if (self.cache[tail.key]) {
      delete self.cache[tail.key];
    }
  }
  self.keys.push(key, value);
  self.cache[key] = self.keys.head;
};

function Node(key, value) {
  var self = this;
  self.key = key;
  self.value = value;
  self.next = null;
  self.prev = null;
  return self;
}

function List() {
  var self = this;
  self.head = null;
  self.tail = null;
  self.size = 0;
  return self;
}

List.prototype.push = function (key, value) {
  var self = this;
  const node = new Node(key, value);

  if (!self.head) {
    self.head = node;
    self.tail = node;
  } else {
    node.next = self.head;
    self.head.prev = node;
    self.head = node;
  }
  self.size++;
};

List.prototype.remove = function (node) {
  var self = this;

  if (self.head === node) {
    self.head = self.head.next;
  } else if (self.tail === node) {
    self.tail = self.tail.prev;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  self.size--;
};

// var cache = new LRUCache(2);

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1)); // returns 1
// console.log(cache.keys);
// cache.put(3, 3); // evicts key 2
// console.log(cache.get(2)); // returns -1 (not found)
// cache.put(4, 4); // evicts key 1
// console.log(cache.get(1)); // returns -1 (not found)
// console.log(cache.get(3)); // returns 3
// console.log(cache.get(4)); // returns 4

// cache.put(1, 1);
// console.log(cache.get(1)); // returns 1
// cache.put(2, 2);
// cache.put(3, 3); // evicts key 2

// cache.put('iron-man', 1);
// cache.put('iron-man', 333);
// console.log(cache.get('iron-man')); // returns 333
// cache.put('hulk', 999);
// cache.put('ultron', 1000);
// console.log(cache.get('hulk')); // returns 999

// var cache = new LRUCache(1);

// cache.put(2, 1);
// console.log(cache.get(2));
// cache.put(3, 2);
// console.log(cache.keys);
// console.log(cache.get(2));
// console.log(cache.get(3));

var cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
