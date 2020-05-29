// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
var getTargetCopy = function (original, cloned, target) {
  if (!original || !cloned) return null;

  if (original.val === target.val) {
    return cloned;
  }

  var left = getTargetCopy(original.left, cloned.left, target);
  var right = getTargetCopy(original.right, cloned.right, target);

  return left || right;
};

var original = {
  val: 7,
  left: {
    val: 4,
  },
  right: {
    val: 3,
    left: { val: 6 },
    right: { val: 19 },
  },
};

var cloned = {
  val: 7,
  left: {
    val: 4,
  },
  right: {
    val: 3,
    left: { val: 6 },
    right: { val: 19 },
  },
};

var target = {
  val: 3,
};

console.log(getTargetCopy(original, cloned, target));
