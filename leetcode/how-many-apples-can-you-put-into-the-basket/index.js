// https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket
var maxNumberOfApples = function (arr) {
  arr.sort((a, b) => a - b);

  let length = arr.length;
  let limit = 5000;
  let count = 0;
  let sum = 0;

  while (length > 0 && limit > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] <= limit && arr[i] !== 0) {
        sum += arr[i];
        arr[i] = 0;
        count++;
        limit -= arr[i];
        length--;
      } else {
        return count;
      }
    }
  }

  return count;
};
