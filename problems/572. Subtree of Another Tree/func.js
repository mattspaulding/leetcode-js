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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  subRoot = JSON.stringify(subRoot);
  let stack = [];

  stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      if (JSON.stringify(node) == subRoot) {
        return true;
      }
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return false;
};

module.exports = {
  func: isSubtree,
};
