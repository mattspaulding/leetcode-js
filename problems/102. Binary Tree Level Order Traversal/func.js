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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  let stack = [];
  let level = 0;
  let levels = [];
  let p = root;

  stack.push([p, level]);

  while (stack.length) {
    let node = stack.pop();
    p = node[0];
    level = node[1];
    if (p != null) {
      if (levels[level]) {
        levels[level].push(p.val);
      } else {
        levels.push([p.val]);
      }
      stack.push([p.right, level + 1]);
      stack.push([p.left, level + 1]);
    }
  }
  return levels;
};

module.exports = {
  func: levelOrder,
};
