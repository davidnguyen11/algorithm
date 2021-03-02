// https://www.geeksforgeeks.org/expression-tree/
class Node {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

class TreeBuilder {
  buildTree(postfix) {
    const stk = [];

    for (let i = 0; i < postfix.length; i++) {
      const char = postfix[i];

      if (!isOperator(char)) {
        stk.push(new Node(Number(char)));
      } else {

        const right = stk.pop();
        const left = stk.pop();

        stk.push(new Node(char, left, right));
      }
    }

    return stk.pop();
  }
}

function solve(node) {
  if (!node) return 0;

  if (!node.left && !node.right) {
    return node.val;
  }

  const left = solve(node.left);
  const right = solve(node.right);

  switch (node.val) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
  }
}


function isOperator(val) {
  return val === '+' || val === '-' || val === '*' || val === '/';
}


var postfix = ['3', '4', '+', '2', '*', '7', '/'];
var postfix = ['4', '5', '7', '2', '+', '-', '*']

const builder = new TreeBuilder();
const t = builder.buildTree(postfix);

console.log(solve(t));