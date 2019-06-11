/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var sum = 0;
    var currl1 = l1;
    var currl2 = l2;
    var newHead;
    var prev = null;
    while (currl1 || currl2 || sum > 0) {
        var vall1 = currl1 ? currl1.val : null;
        var vall2 = currl2 ? currl2.val : null;
        sum += vall1 + vall2;
        var newNode = new ListNode(sum % 10);
        if (prev) prev.next = newNode;
        else newHead = newNode;
        prev = newNode;
        sum = Math.floor(sum / 10);
        currl1 = currl1 ? currl1.next : null;
        currl2 = currl2 ? currl2.next : null;
    }
    return newHead;
};