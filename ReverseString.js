

var printArray = function (arr) {
    const separator = " , ";
    let msg = "length: " + arr.length + "\n";
    let elemets = ""
    for (let i = 0; i < arr.length - 1; i++) {
        msg = msg + arr[i] + separator;
    }
    if (arr.length > 0)
        msg = msg + arr[arr.length - 1];

    console.log(msg);
    return msg;
}


var reverseArray = function (s) {

    for (let i = 0; i < s.length / 2; i++) {
        let tmp = s[i];
        let pairIndex = (s.length - 1 - i);
        s[i] = s[pairIndex];
        s[pairIndex] = tmp;
    }
}
var reverseString = function (s) {

    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
};
var reverseWords = function (s) {
    let wordStart = 0;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            let word = s.substring(wordStart, i);
            if (word != " ") {
                let reversedWord = reverseString(word);
                result += reversedWord + s[i];
            }
            wordStart = i+1;
        } else if (i == s.length - 1) {
            let word = s.substring(wordStart);
            let reversedWord = reverseString(word);
            result += reversedWord;
        }
    }

    return result;
};


const cars = [1, 2, 3, 4, 5, 6];
printArray(cars);;
reverseArray(cars);
printArray(cars);


let s = "Let's take LeetCode contest";
printArray(s);;
let reversed = reverseWords(s);
printArray(reversed);
