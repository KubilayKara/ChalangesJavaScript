// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let stairList = new Array(n);

    for (let i = n - 1; i >= 0; i--) {
        stairList[i]=0;
        for (let step = 1; step <= 2; step++) {
            //one or  two steps
            let nextStep = i + step;
            if (nextStep < n)
                stairList[i] += stairList[nextStep]; // not top yet
            else if (nextStep == n)
                stairList[i] +=  1; //top
            //else furder than top => do nothing
        }
    }
    return stairList[0];
};

let res = climbStairs(5);
console.log(res);