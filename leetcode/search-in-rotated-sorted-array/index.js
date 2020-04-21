var search = function (nums, target) {
  var last = nums[nums.length - 1];
  var i;
  if (target <= last) {
    i = nums.length - 1;

    while (nums[i] > nums[i - 1]) {
      if (nums[i] === target) {
        return i;
      }
      i--;
    }
    if (nums[i] === target) {
      return i;
    }
    return -1;
  }

  i = 0;

  while (nums[i] < nums[i + 1]) {
    if (nums[i] === target) {
      return i;
    }
    i++;
  }
  if (nums[i] === target) {
    return i;
  }
  return -1;
};

var nums = [4, 5, 6, 7, 0, 1, 2];
var target = 8;
var target = 2;

console.log(search(nums, target));