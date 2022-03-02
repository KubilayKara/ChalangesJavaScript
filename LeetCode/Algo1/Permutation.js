// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length == 0)
        return [[]];
    if (nums.length == 1)
        return [nums];
    if (nums.length == 2)
        return [nums, [nums[1], nums[0]]];

    if (nums.length == 3)
        return [nums,
            [nums[0], nums[2], nums[1]],
            [nums[1], nums[0], nums[2]],
            [nums[1], nums[2], nums[0]],
            [nums[2], nums[0], nums[1]],
            [nums[2], nums[1], nums[0]]];


    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let innerResult = permute(copyExceptItem(nums, i));
        for (let j = 0; j < innerResult.length; j++) {

            let r = pushArray(nums[i], innerResult[j]);
            result.push(r);
        }
    }
    return result;
};

var copyExceptItem = function (nums, itemIndex) {
    let result = new Array(nums.length - 1);
    for (let i = 0; i < nums.length; i++) {
        if (i < itemIndex)
            result[i] = nums[i];
        else if (i > itemIndex)
            result[i - 1] = nums[i];
    }
    return result;
};
var pushArray = function (item, arr) {
    let result = new Array(arr.length + 1);
    result[0] = item;
    for (let i = 0; i < arr.length; i++) {
        result[i + 1] = arr[i];
    }
    return result;
};

let ar = [1];
let result = permute(ar);
console.log(result);