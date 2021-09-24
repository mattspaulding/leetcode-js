/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let listHead = new ListNode(head[0]);
  let current = listHead;
  for (let i = 1; i < head.length; i++) {
    current.next = new ListNode(head[i]);
    current = current.next;
  }

  let slow = listHead;
  let fast = listHead;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let result = [];
  while (slow != null) {
    result.push(slow.val);
    slow = slow.next;
  }
  return result;
};

module.exports = {
  func: middleNode,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
