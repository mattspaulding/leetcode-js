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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null) {
    return false;
  }
  let stack = [];
  let p = root;
  stack.push([p, p.val]);

  while (stack.length) {
    let node = stack.pop();
    let p = node[0];
    let sum = node[1];
    if (p != null) {
      if (p.left == null && p.right == null) {
        if (sum == targetSum) {
          return true;
        }
      }

      if (p.right != null) {
        stack.push([p.right, sum + p.right.val]);
      }
      if (p.left != null) {
        stack.push([p.left, sum + p.left.val]);
      }
    }
  }
  return false;
};

module.exports = {
  func: hasPathSum,
};
