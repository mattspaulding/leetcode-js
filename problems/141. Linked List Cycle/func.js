/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let headArr = head;
  let current = new ListNode();
  head = current;

  for (let i = 0; i < headArr.length; i++) {
    current.val = headArr[i];
    if (i == headArr.length - 1) {
      current.next = head.next;
    } else {
      current.next = new ListNode();
      current = current.next;
    }
  }

  let map = new Map();
  while (head != null) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head);
      head = head.next;
    }
  }
  return false;
};

module.exports = {
  func: hasCycle,
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
