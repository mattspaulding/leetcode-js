/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // convert to Linked List
  let listHead = new ListNode(head[0]);
  let current = listHead;
  for (let i = 1; i < head.length; i++) {
    current.next = new ListNode(head[i]);
    current = current.next;
  }

  current = listHead;
  let listLen = 0;
  while (current != null) {
    current = current.next;
    listLen++;
  }

  current = listHead;
  let i = 0;
  while (true) {
    if (listLen - n - 1 < i) {
      listHead = listHead.next;
      break;
    }
    if (listLen - n - 1 == i) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
    i++;
  }

  // convert to Array
  let result = [];
  while (listHead != null) {
    result.push(listHead.val);
    listHead = listHead.next;
  }
  return result;
};

module.exports = {
  func: removeNthFromEnd,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
