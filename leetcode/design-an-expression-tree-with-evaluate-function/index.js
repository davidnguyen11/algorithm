// https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/
/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

var Node = function (val, left, right) {
  this.left = left;
  this.right = right;
  this.val = val;
};

Node.prototype.evaluate = function () {
  if (!isOperator(this.val)) {
    return this.val;
  }

  const left = this.left.evaluate();
  const right = this.right.evaluate();

  switch (this.val) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
    default:
      return 0;
  }
};

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

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

function isOperator(val) {
  return val === '+' || val === '-' || val === '*' || val === '/';
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */