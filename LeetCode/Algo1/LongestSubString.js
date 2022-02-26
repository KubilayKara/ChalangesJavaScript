/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function (s) {
    let dict = {};
    let longest = 0;
    let cur = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        console.log("c");
        if (dict[c] != undefined && i - dict[c] < cur + 1)
            cur = i - dict[c];
        else {

            cur = cur + 1;
        }
        dict[c] = i;
        if (cur > longest)
            longest = cur;
    }
    return longest;
};
let s = "abbacdeda";

console.log(lengthOfLongestSubstring(s));