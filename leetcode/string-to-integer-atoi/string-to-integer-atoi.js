// https://leetcode.com/problems/string-to-integer-atoi/
const MIN = -Math.pow(2, 31);
const MAX = Math.pow(2, 31) - 1;

const valid_num = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
};

const sign = {
  '-': true,
  '+': true
};

var myAtoi = function(str) {
  str = str.trim();
  let arr = str.split('');
  const result = [];

  if (valid_num[arr[0]] === undefined && sign[arr[0]] === undefined) return 0;

  let lastIndexNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];

    if (i - lastIndexNumber === 1 && valid_num[c] === undefined) {
      break;
    }

    if (sign[c] && lastIndexNumber === 0) {
      result.push(c);
    }

    if (valid_num[c] !== undefined) {
      lastIndexNumber = i;
      result.push(valid_num[c]);
    }
  }

  if (result.length === 1 && !valid_num[result[0]]) {
    return 0;
  }

  let startIndex = 0;
  let s = null;
  let final = 0;
  if (sign[result[0]]) {
    s = result[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < result.length; i++) {
    final = final * 10 + result[i];
  }

  if (s === '-') {
    final = -final;
  }

  if (final < MIN) return MIN;
  if (final > MAX) return MAX;

  return final;
};

// const str = '42'; // 42
// const str = '   -43  +world'; // -43
// const str = '4193 with words'; // 4193
// const str = 'words and 987'; // 0
// const str = '-91283472332'; // -2147483648
// const str = '3.14159'; // 3
// const str = ''; // 0
// const str = '+'; // 0
// const str = '-'; // 0
// const str = '+-2'; // 0
// const str = '  -0012a42'; // -12
// const str = '  - 56'; // 0
// const str = '+4-3'; // 4

console.log(myAtoi(str));
