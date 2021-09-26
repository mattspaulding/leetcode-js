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
var inorderTraversal = function (root) {
  if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];
  let p = root;

  while (p !== null || stack.length !== 0) {
    if (p != null) {
      stack.push(p);
      p = p.left;
    } else {
      const node = stack.pop();
      result.push(node.val); // Add after all left children
      p = node.right;
    }
  }
  return result;
};

module.exports = {
  func: inorderTraversal,
};
