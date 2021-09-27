/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let p = root;

  let stack = [];
  let level = 0;
  let levels = [];
  stack.push([p, level]);

  while (stack.length) {
    let node = stack.pop();
    p = node[0];
    level = node[1];
    if (p != null) {
      if (levels[level]) {
        p.next = levels[level].pop();
        levels[level].push(p);
      } else {
        p.next = null;
        levels.push([p]);
      }
      stack.push([p.left, level + 1]);
      stack.push([p.right, level + 1]);
    }
  }
  return root;
};

module.exports = {
  func: connect,
};
