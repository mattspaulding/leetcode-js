/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if(root1==null)return root2;
  if(root2==null)return root1;
  let stack = [];
  stack.push([root1, root2]);
  while (stack.length) {
    let node = stack.pop();
    let p1 = node[0];
    let p2 = node[1];
    if (p1 != null && p2 != null) {
      p1.val += p2.val;
      if (p1.right == null) {
        p1.right = p2.right;
      } else {
        stack.push([p1.right, p2.right]);
      }
      if (p1.left == null) {
        p1.left = p2.left;
      } else {
        stack.push([p1.left, p2.left]);
      }
    }

  }
  return root1;
};

module.exports = {
  func: mergeTrees,
};
