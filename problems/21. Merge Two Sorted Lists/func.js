/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let l1Arr = l1;
  let current = new ListNode();
  l1 = current;
  for (let i = 0; i < l1Arr.length; i++) {
    current.val = l1Arr[i];
    if (i < l1Arr.length - 1) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  let l2Arr = l2;
  current = new ListNode();
  l2 = current;
  for (let i = 0; i < l2Arr.length; i++) {
    current.val = l2Arr[i];
    if (i < l2Arr.length - 1) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
   current = new ListNode();

  let result = current;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }
  if(l1){
    current.next=l1;
  }
  if(l2){
    current.next=l2;
  }
  return result.next;
};

module.exports = {
  func: mergeTwoLists,
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
