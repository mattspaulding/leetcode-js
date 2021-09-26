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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }

  let stack = [];
  let maxDepth = 0;
  let p = root;
  let level = 1;
  stack.push([p, level]);

  while (stack.length) {
    let node = stack.pop();
    p = node[0];
    level = node[1];
    if (p != null) {
      maxDepth = level > maxDepth ? level : maxDepth;
      stack.push([p.right, level + 1]);
      stack.push([p.left, level + 1]);
    }
  }
  return maxDepth;
};

module.exports = {
  func: maxDepth,
};
