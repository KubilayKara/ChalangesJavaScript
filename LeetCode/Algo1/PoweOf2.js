// https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n < 0)
        return false;
    let s = n.toString(2);

    let hasAny1 = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 1) {
            if (hasAny1)
                return false;
            else
                hasAny1 = true;
        }
    }
    return hasAny1;
};
function dec2bin(dec) {
    console.log(dec.toString(2));
    console.log(dec >>> 0);
    console.log((dec >>> 0).toString(2));
    return (dec >>> 0).toString(2);
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(128));
console.log(isPowerOfTwo(-2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(-16));

dec2bin(-2);
dec2bin(2);
dec2bin(5);
dec2bin(-5);