/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let headArr = head;
  let headCurrent = new ListNode();
  head = headCurrent;
  for (let i = 0; i < headArr.length; i++) {
    headCurrent.val = headArr[i];
    if (i < headArr.length - 1) {
      headCurrent.next = new ListNode();
      headCurrent = headCurrent.next;
    }
  }

  let sentinel = new ListNode(0, head);
  let prev = sentinel;
  let current = head;
  while (current != null) {
    if (current.val == val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return sentinel.next;
};

module.exports = {
  func: removeElements,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
