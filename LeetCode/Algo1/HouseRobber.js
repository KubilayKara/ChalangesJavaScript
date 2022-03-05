// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    let mem = new Array(nums.length);
    let prev = nums[0];
    let prev2 = -1;

    for (let i = 1; i < nums.length; i++) {
        let current = Math.max(prev, nums[i] + (prev2 > 0 ? prev2 : 0));
        prev2 = prev;
        prev = current;
    }
    return mem[nums.length - 1];
};
// var rob = function (nums) {

//     let mem = new Array(nums.length);


//     return findValue(nums, mem, nums.length - 1);
// };

// var findValue = function (nums, mem, i) {
//     if (i < 0)
//         return 0;

//     if (mem[i] != undefined)
//         return mem[i];

//     let result = Math.max(findValue(nums, mem, i - 1), nums[i] + findValue(nums, mem, i - 2));
//     mem[i] = result;
//     return result;
// }

let nums = [7, 2, 8, 4, 5];
let res = rob(nums);