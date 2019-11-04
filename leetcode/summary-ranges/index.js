// https://leetcode.com/problems/summary-ranges/

var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];

  let ranges = [nums[0]];
  const listOfRange = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      ranges.push(nums[i]);
    } else {
      listOfRange.push(ranges);
      ranges = [nums[i]];
    }
  }

  listOfRange.push(ranges);
  
  const result = [];
  for (let i = 0; i < listOfRange.length; i++) {
    let temp = `${listOfRange[i][0]}->${listOfRange[i][listOfRange[i].length - 1]}`;
    if (listOfRange[i].length === 1) {
      temp = `${listOfRange[i][0]}`;
    }
    result.push(temp);
  }
  return result;
};

var input = [0, 1, 2, 4, 5, 7]; // ["0->2","4->5","7"]
// var input = [0, 2, 3, 4, 6, 8, 9]; // ["0","2->4","6","8->9"]
// var input = [0]; // ["0"]
// var input = []; // []

const result = summaryRanges(input);
console.log(result);