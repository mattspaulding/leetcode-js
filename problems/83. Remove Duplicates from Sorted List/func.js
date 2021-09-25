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
var deleteDuplicates = function (head) {
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
  while (head != null && head.next != null) {
    while (head.next!=null && head.val == head.next.val) {
      head.next = head.next.next;
    }
    head = head.next;
  }

  return sentinel.next;
};

module.exports = {
  func: deleteDuplicates,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
