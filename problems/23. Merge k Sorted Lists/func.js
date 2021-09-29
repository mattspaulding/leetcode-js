/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let sentinel = new ListNode();
  let curr = sentinel;

  while (true) {
    let smallest = new ListNode(9999999);
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] != null && lists[i].val < smallest.val) {
        smallest = lists[i];
      }
    }
    if (smallest.val == 9999999) {
      break;
    }
    curr.next = new ListNode(smallest.val);
    curr = curr.next;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] != null && lists[i].val == smallest.val) {
        lists[i] = lists[i].next;
        break;
      }
    }
  }
  return sentinel.next;
};

module.exports = {
  func: mergeKLists,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
