// https://leetcode.com/problems/triangle/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let previousResults = triangle[0];
    let min = triangle[0][0];
    for (let r = 1; r < triangle.length; r++) {
        let row = triangle[r];
        let currentResults = new Array(row.length);
        min = undefined;
        for (let c = 0; c < row.length; c++) {
            let res;
            if (c - 1 < 0)
                res = previousResults[c];
            else if (c >= previousResults.length)
                res = previousResults[c - 1];
            else
                res = Math.min(previousResults[c - 1], previousResults[c]);

            res += row[c];
            currentResults[c] = res;

            if (min == undefined || res < min)
                min = res;
        }
        previousResults = currentResults;
    }

    return min;
};

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal2 = function (triangle) {
    let len = triangle.length;
    let mem = triangle[len - 1];
    for (let layer = len - 2; layer >= 0; layer--) // For each layer
    {
        for (let i = 0; i <= layer; i++) // Check its every 'node'
        {
            // Find the lesser of its two children, and sum the current value in the triangle with it.
            mem[i] = Math.min(mem[i], mem[i + 1]) + triangle[layer][i];
        }
    }
    return mem[0];
}
let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
let result = minimumTotal2(triangle);
console.log(result);