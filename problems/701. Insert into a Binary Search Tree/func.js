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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root == null) {
    return new TreeNode(val);
  }
  let p = root;
  while (p != null) {
    if (p.val < val) {
      if (p.right == null) {
        p.right = new TreeNode(val);
        break;
      }
      p = p.right;
    } else {
      if (p.left == null) {
        p.left = new TreeNode(val);
        break;
      }
      p = p.left;
    }
  }
  return root;
};

module.exports = {
  func: insertIntoBST,
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
