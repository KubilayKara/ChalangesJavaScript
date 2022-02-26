// https://leetcode.com/problems/permutation-in-string/

var checkPermutation = function (s1, s2) {
    if (s1.lenght != s2.lenght)
        return false

    var dic = Array(26);
    dic.fill(0);
    for (let i = 0; i < s1.length; i++) {
        let c1 = s1.charCodeAt(i) - 'a'.charCodeAt(0);
        let c2 = s2.charCodeAt(i) - 'a'.charCodeAt(0);
       
            dic[c1] -= 1;  
            dic[c2] += 1;
    }

    for (let j=0;j<26; j++) {        
            if (dic[j] !== 0)
            return false;
      
    }
    return true;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    for (let i = 0; i <= s2.length - s1.length; i++) {
        if (checkPermutation(s1, s2.substring(i, i + s1.length))) {
            return true;
        }

    }
    return false;
};

var checkInclusion2 = function(s1, s2) {
    var len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;
    var count = Array(26);
    count.fill(0);
    for (var i = 0; i < len1; i++) {
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    if (allZero(count)) return true;
    
    for (var j = len1; j < len2; j++) {
        count[s2.charCodeAt(j) - 'a'.charCodeAt(0)]--;
        count[s2.charCodeAt(j - len1) - 'a'.charCodeAt(0)]++;
        if (allZero(count)) return true;
    }
    
    return false;
    
   function allZero(count) {
        for (var i = 0; i < 26; i++) {
            if (count[i] !== 0) return false;
        }
        return true;
    }
};



// checkPermutation("abc", "cab");
// checkPermutation("abd", "cab");
// checkPermutation("abcc", "cacb");

// checkInclusion("abc", "fcbaklm");
// checkInclusion("adc", "dcda");
checkInclusion2("abc", "fcbaklm");