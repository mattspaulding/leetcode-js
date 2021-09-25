/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  /**
   * Algorithm:
   * 1. Create an empty stack [];
   * 2. Do while stack is not empty:
   * 2.1. Pop an item from stack and add it to the 'result' array.
   * 2.2. Push 'right child' of popped item to stack.
   * 2.3. Push 'left child' of popped item to stack.
   */
  if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

module.exports = {
  func: preorderTraversal,
};
