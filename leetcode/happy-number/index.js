var isHappy = function (n) {
  if (n === 1) return true;

  function helper(sum, count) {
    if (count === 8 && sum !== 1) {
      return false;
    }

    if (sum === 1) {
      return true;
    }

    var nums = sum.toString().split('');
    var s = 0;
    var temp;
    for (var i = 0; i < nums.length; i++) {
      temp = parseInt(nums[i]);
      s = s + temp * temp;
    }

    return helper(s, count + 1);
  }

  return helper(n, 0);
};

var n = 1;
var n = 7;
var n = 10;
var n = 13;
var n = 49;
// var n = 9; // false

console.log(isHappy(n));
