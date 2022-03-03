// https://leetcode.com/problems/letter-case-permutation/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s, previousStrings) {

    if (previousStrings == undefined)
        previousStrings = [""];

    let current = s[0];
    let changed = changeCasing(current);
    let isChanged = current != changed;
    let result = [];//direkt initiliase etsek nasıl olur?
    for (let i = 0; i < previousStrings.length; i++) {
        result.push(previousStrings[i] + current);
        if (isChanged)
            result.push(previousStrings[i] + changed);
    }
    if (s.length == 1)
        return result;

    return letterCasePermutation(s.substring(1), result);
};



/**
 * @param  {string} s
 * @param  {number} index
 */
var changeCasing = function (s) {

    let charCode = s.charCodeAt(0);
    let newChar;
    if (charCode >= 65 && charCode <= 90) {
        return newChar = String.fromCharCode(charCode + 32); //capital case
    } else if (charCode >= 97 && charCode <= 122) {
        return newChar = String.fromCharCode(charCode - 32); //small case
    }
    else
        return s; //not letter


};

let s = "a1B2c3d4";
let res = changeCasing(s, 0);
console.log(res);

res = changeCasing(s, 2);
console.log(res);

res = changeCasing(s, 3);
console.log(res);

res = letterCasePermutation(s);
console.log(res);