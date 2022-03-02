// https://leetcode.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    if (n < k)
        return null;
    if (n == k) {
        let list = [];
        for (let i = 1; i <= n; i++)
            list.push(i);
        return [list];

    }

    return expandList([[]], n, k);

};
var expandList = function (list, n, k) {
    let expandedList = [];
    for (let i = 0; i < list.length; i++) {
        let current = list[i];
        let last = current.length > 0 ? current[current.length - 1] : 0;
        let numbersToPush = []
        for (let j = last + 1; j <= n - k + 1; j++) {
            numbersToPush.push(j);
        }
        if (numbersToPush.length == 1) {
            current.push(numbersToPush[0]);
            expandedList.push(current);
        }
        else {
            for (let k = 0; k < numbersToPush.length; k++) {
                expandedList.push(copyArrayAndPushItem(current, numbersToPush[k]));
            }
        }
    }
    if (k - 1 == 0)
        return expandedList;
    return expandList(expandedList, n, k - 1);
}

var copyArrayAndPushItem = function (array, item) {
    let result = new Array(array.length + 1);
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i];
    }
    result[result.length - 1] = item;
    return result;
}

let result = combine(5, 4);
console.log(result);