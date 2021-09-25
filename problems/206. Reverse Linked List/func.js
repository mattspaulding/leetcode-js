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
var reverseList = function (head) {
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

  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  let curr = new ListNode();
  let sentinel = curr;
  for (let i = arr.length - 1; i >= 0; i--) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return sentinel.next;
};

module.exports = {
  func: reverseList,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
