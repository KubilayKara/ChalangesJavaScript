
console.log("Merge Binary Trees");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (isEmpty(root1) && isEmpty(root2))
        return;

    let newNode = new TreeNode((isEmpty(root1) ? 0 : root1.val) + (isEmpty(root2) ? 0 : root2.val),
        mergeTrees(isEmpty(root1) ? null : root1.left, isEmpty(root2) ? null : root2.left),
        mergeTrees(isEmpty(root1) ? null : root1.right, isEmpty(root2) ? null : root2.right))
    return newNode;

};
var isEmpty = function (val) {
    return (val == undefined || val == null);
}

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

let roo1 = new TreeNode(1, new TreeNode(3, new TreeNode(5), null), new TreeNode(2, null, null));
let roo2 = new TreeNode(2, new TreeNode(1, undefined, 4), new TreeNode(3, undefined, new TreeNode(7, undefined, undefined)));

let result = mergeTrees(roo1, roo2);


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    //console.log(children.length);
    if (root == null || root[0].left == null)
        return root;

    let grandChildren = root.left;
    //console.log(children[0]);


    let tmp;
    let current = root;
    while (current != null) {
        if (tmp != undefined)
            tmp.right.next = current.left;
        current.left.next = current.right;
        tmp = current;
        current = current.next;
    }
    connect(grandChildren);
    return root;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect2 = function (root) {

    if (root == null || root.left == null)
        return root;

    let leftMostNode = root;


    while (leftMostNode != null) {
        let current = leftMostNode;
        let previousRight;
        while (current != null && current.left!=null) {
            current.left.next = current.right;
            if (previousRight != null)
                previousRight.next = current.left;
            previousRight = current.right;
            current = current.next;
        }
        leftMostNode = leftMostNode.left;
    }
    return root;
};
