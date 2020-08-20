// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
var deleteDuplicates = function (head) {
  var map = {};
  var arr = [];

  while (head) {
    var val = head.val;
    map[val] = map[val] || 0;
    map[val]++;
    arr.push(val);
    head = head.next;
  }

  var ans = null;
  var n = arr.length;

  for (var i = n - 1; i >= 0; i--) {
    if (map[arr[i]] > 1) continue;

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
