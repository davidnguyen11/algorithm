// https://leetcode.com/problems/sort-integers-by-the-power-value/
var getKth = function (lo, hi, k) {
  var nums = [];
  for (var i = lo; i <= hi; i++) {
    var step = getPowerSteps(i);
    nums.push({ value: i, step });
  }

  nums.sort(function (a, b) {
    return a.step - b.step;
  });

  return nums[k - 1].value;
};

function getPowerSteps(num) {
  var step = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    step++;
  }
  return step;
}

var lo = 12;
var hi = 15;
var k = 2;

console.log(getKth(lo, hi, k));
