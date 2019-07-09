// https://www.hackerrank.com/challenges/balanced-brackets/problem

function isBalanced(s) {
  let parentheses = s.split('');
  let temp = parentheses.pop();
  let tempArray = [];

  const mapping = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  while (parentheses.length > 0) {
    let current = parentheses.pop();
    if (current !== mapping[temp]) {
      tempArray.push(temp);
      temp = current;
    } else {
      temp = tempArray.pop();
    }
  }
  if (tempArray.length > 0) {
    return 'NO';
  } else {
    return 'YES';
  }
}

// let parentheses = '[()]{}{[()()]()}';
// let parentheses = '[()]{}';
// let parentheses = '{{[[(())]]}}';
let parentheses = '{[()]}';

// let parentheses = '[(])';
// let parentheses = '{[(])}';

console.log(isBalanced(parentheses));
