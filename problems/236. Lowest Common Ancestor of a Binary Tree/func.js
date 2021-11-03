/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let map = new Map();
  let stack = [];
  let pNode;
  let qNode;
  stack.push(root);
  while (stack.length) {
    let temp = stack.pop();
    if (temp.val === p) {
      pNode = temp;
    }
    if (temp.val === q) {
      qNode = temp;
    }
    if (temp.right) {
      map.set(temp.right, temp);
      stack.push(temp.right);
    }
    if (temp.left) {
      map.set(temp.left, temp);
      stack.push(temp.left);
    }
  }

  let set = new Set();
  set.add(pNode);
  while (pNode !== root) {
    pNode = map.get(pNode);
    set.add(pNode);
  }

  while (!set.has(qNode)) {
    qNode = map.get(qNode);
  }
  return qNode.val;
};

module.exports = {
  func: lowestCommonAncestor,
};
