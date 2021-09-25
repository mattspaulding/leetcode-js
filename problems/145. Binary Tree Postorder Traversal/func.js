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
var postorderTraversal = function (root) {
  if (root == null) {
    return [];
  }

  let result = [];
  let stack = [];

  while (root != null || stack.length) {
    if (root != null) {
      stack.push(root);
      result.unshift(root.val);
      root = root.right;
    } else {
      const node=stack.pop();
      root = node.left;
    }
  }
  return result;
};

module.exports = {
  func: postorderTraversal,
};
