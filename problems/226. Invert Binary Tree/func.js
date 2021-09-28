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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let stack = [];

  let p = root;
  stack.push(p);

  while (stack.length) {
    let p = stack.pop();
    if (p != null) {
      let temp = p.right;
      p.right = p.left;
      p.left = temp;
      stack.push(p.right);
      stack.push(p.left);
    }
  }
  return root;
};

module.exports = {
  func: invertTree,
};
