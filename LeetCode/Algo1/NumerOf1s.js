//https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let s = dec2bin(n);
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1")
            count++;
    }
    return count;
};

function dec2bin(dec) {
    console.log(dec.toString(2));
    console.log(dec >>> 0);
    console.log((dec >>> 0).toString(2));
    return (dec >>> 0).toString(2);
}

let n=00000000000000000000000000001011;
console.log(hammingWeight(n));