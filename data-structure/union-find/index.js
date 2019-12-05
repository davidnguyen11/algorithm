// var als = ['e', 'f', 'i', 'd', 'c', 'a', 'j', 'l', 'g', 'k', 'b', 'h'];
var als = ['a', 'b', 'c'];

var mapping = {};
var parent = [];

for (var i = 0; i < als.length; i++) {
  const letter = als[i];
  mapping[letter] = i;
  parent.push(i);
}

function findParent(parent, i) {
  if (parent[i] === mapping[als[i]]) {
    return i;
  }
  return findParent(parent, parent[i]);
}

function union(parent, letter1, letter2) {
  var indexLetter1 = mapping[letter1];
  var indexLetter2 = mapping[letter2];
  var aa = findParent(parent, indexLetter1);
  var bb = findParent(parent, indexLetter2);
  parent[aa] = bb;
}

// union(parent, 'c', 'k');
// union(parent, 'f', 'e');
// union(parent, 'a', 'j');
// union(parent, 'a', 'b');
// union(parent, 'c', 'd');
// union(parent, 'd', 'i');
// union(parent, 'l', 'f');
// union(parent, 'c', 'a');
// union(parent, 'a', 'b');
// union(parent, 'h', 'g');
// union(parent, 'h', 'f');
// union(parent, 'h', 'b');

union(parent, 'a', 'b');
union(parent, 'b', 'c');

var letterAIdx = mapping['a'];
var letterCIdx = mapping['c'];
console.log('letterAIdx', findParent(parent, letterAIdx));
console.log('letterCIdx', findParent(parent, letterCIdx));

console.log(parent);
