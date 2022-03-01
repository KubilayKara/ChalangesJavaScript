// https://leetcode.com/problems/reverse-linked-list/
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

    if (head == null || head.next == null)
        return head;
    let result= findNextNode(head).lastNode;
    head.next=null;
    return result;
};
/**
 * 
 * @param {ListNode} node 
 * @returns {{ListNode,ListNode}}
 */
var findNextNode = function (node) {
    if (node.next == null) { //lastNode
        return {
            nextNode: node,
            lastNode: last = node
        };
    }
    let r = findNextNode(node.next);
    r.nextNode.next = node;//reverse
    return {
        nextNode: node,
        lastNode: r.lastNode
    };
}
let ListNode = function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
};

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let result = reverseList(list1);
console.log(result);