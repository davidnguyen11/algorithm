var kLengthApart = function (nums, k) {
  var count = 0;
  var flag = false;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (flag && count < k) {
        return false;
      }

      flag = true;
      count = 0;
    } else {
      count++;
    }
  }
  return true;
};

// true
var nums = [1, 0, 0, 0, 1, 0, 0, 1];
var k = 2;

// false
var nums = [1, 0, 0, 1, 0, 1];
var k = 2;

// true
var nums = [1, 1, 1, 1, 1];
var k = 0;

// true
var nums = [0, 1, 0, 1];
var k = 1;

// true
var nums = [1, 1, 1, 1, 1];
var k = 1;

console.log(kLengthApart(nums, k));
