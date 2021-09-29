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
var isValidBST = function (root) {
  let stack = [];
  stack.push([root, null]);

  while (stack.length) {
    let node = stack.pop();
    root = node[0];
    val = node[1];
    if (root != null) {
      if (root.right != null) {
        if (root.right.val <= root.val || (val && root.right.val >= val)) {
          return false;
        }
        stack.push([root.right, root.val]);
      }
      if (root.left != null) {
        if (root.left.val >= root.val || (val && root.left.val <= val)) {
          return false;
        }
        stack.push([root.left, root.val]);
      }
    }
  }
  return true;
};

module.exports = {
  func: isValidBST,
};
