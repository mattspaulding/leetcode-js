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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let map = new Map();
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let root = stack.pop();
    if (root != null) {
      let diff = k - root.val;
      if (map.has(diff)) {
        return true;
      }
      map.set(root.val);
      stack.push(root.right);
      stack.push(root.left);
    }
  }
  return false;
};

module.exports = {
  func: findTarget,
};
