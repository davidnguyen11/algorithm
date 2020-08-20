// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
var deleteDuplicates = function (head) {
  var ans = null;
  var visited = {};
  var arr = [];

  while (head) {
    var val = head.val;

    if (!visited[val]) {
      arr.push(val);
      visited[val] = true;
    }

    head = head.next;
  }

  var n = arr.length;
  for (var i = n - 1; i >= 0; i--) {
    var node = {
      val: arr[i],
      next: null,
    };

    if (!ans) {
      ans = node;
    } else {
      node.next = { ...ans };
      ans = node;
    }
  }

  return ans;
};
