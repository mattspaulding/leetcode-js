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
  let p = root;

  while (p != null || stack.length) {
    if (p != null) {
      stack.push(p);
      result.unshift(p.val); // Reverse the process of preorder
      p = p.right; // Reverse the process of preorder
    } else {
      const node = stack.pop();
      p = node.left; // Reverse the process of preorder
    }
  }
  return result;
};

module.exports = {
  func: postorderTraversal,
};
