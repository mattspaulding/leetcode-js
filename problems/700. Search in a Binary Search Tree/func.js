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
 var searchBST = function(root, val) {
    
  let stack=[];
  let p=root;
  stack.push(p);
  while(stack.length){
    p=stack.pop();
    if(p!=null){
      if(p.val==val){
        return p;
      }
      stack.push(p.right);
      stack.push(p.left);
    }
  }
  return null;
};

module.exports = {
  func: searchBST,
};
