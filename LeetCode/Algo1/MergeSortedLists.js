// https://leetcode.com/problems/merge-two-sorted-lists/


// Definition for singly-linked list.
let ListNode = function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    if (list1 == null || list1 == undefined)
        return list2;

    if (list2 == null || list2 == undefined)
        return list1;

    let head;
    let tail;


    while (list1 != null || list2 != null) {
        let result;
        if (list1.val < list2.val) {
            result = list1;
            list1 = list1.next;
        } else {
            result = list2;
            list2 = list2.next;
        }

        if (head == undefined) { //first node
            head = result;
            tail = result;
        } else {
            tail.next = result;
            tail = result;
        }

        if (list1 == null) {
            tail.next = list2;
            break;
        }

        if (list2 == null) {
            tail.next = list1;
            break;
        }
    }
    return head;
};
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(5, new ListNode(8, new ListNode(10)));

let result = mergeTwoLists(list1, list2);
console.log(result);
