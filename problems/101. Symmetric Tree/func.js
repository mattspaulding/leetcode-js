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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) {
    return false;
  }
  if (root.left == null && root.right == null) {
    return true;
  }

  let level = 0;
  let stack = [];
  stack.push([root.left, level]);
  let levels = [];
  let p;

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
    } else {
      if (levels[level]) {
        levels[level].push(null);
      } else {
        levels.push([null]);
      }
    }
  }
  level = 0;
  stack.push([root.right, level]);
  while (stack.length) {
    let node = stack.pop();
    p = node[0];
    level = node[1];
    if (p != null) {
      if (levels[level]) {
        if (p.val != levels[level].pop()) {
          return false;
        }
      } else {
        return false;
      }

      stack.push([p.right, level + 1]);
      stack.push([p.left, level + 1]);
    } else {
      if (levels[level].pop() != null) {
        return false;
      }
    }
  }
  for (let i = 0; i < levels.length; i++) {
    if (levels[i].length) {
      return false;
    }
  }
  return true;
};

module.exports = {
  func: isSymmetric,
};
