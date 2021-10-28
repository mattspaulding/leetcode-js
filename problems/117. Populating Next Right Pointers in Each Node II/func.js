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
  let queue = [];
  let levels = [];
  queue.push([root, 0]);

  while (queue.length) {
    curr = queue.shift();
    let node = curr[0];
    let level = curr[1];
    if (node != null) {
      levels.push([level, node]);
      queue.push([node.left, level + 1]);
      queue.push([node.right, level + 1]);
    }
  }
  for (let i = 0; i < levels.length - 1; i++) {
    if (levels[i][0] === levels[i + 1][0]) {
      levels[i][1].next = levels[i + 1][1];
    }
  }
  return root;
};

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

module.exports = {
  func: connect,
};
