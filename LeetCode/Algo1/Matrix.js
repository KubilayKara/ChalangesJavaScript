/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
//  https://leetcode.com/problems/01-matrix/
var updateMatrix = function (mat) {

    //find a zeros
    let zeroList = [];
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
            if (mat[r][c] == 0) {
                zeroList.push({
                    row: r,
                    column: c
                });
            }
            else
                mat[r][c] = -1;

        }
    }
    if (zeroList.length == 0)
        return;

    visitNeighbours(mat, zeroList);
    return mat;

};

var visitNeighbours = function (mat, list) {

    if (list.length <= 0)
        return;

    let newList = [];
    for (const cell of list) {
        let c = cell.column;
        let r = cell.row;
        let val = mat[r][c] + 1;

        //up
        markAndAddCell(newList, mat, r - 1, c, val);
        //down
        markAndAddCell(newList, mat, r + 1, c, val);
        //left
        markAndAddCell(newList, mat, r, c + 1, val);
        //right
        markAndAddCell(newList, mat, r, c - 1, val);
    }
    if (newList.length > 0)
        visitNeighbours(mat, newList);
}

var markAndAddCell = function (newList, mat, r, c, value) {
    if (markCell(mat, r, c, value)) {
        newList.push({
            row: r,
            column: c
        });
    }
}
var markCell = function (mat, r, c, value) {
    if (r < 0 || c < 0 || r >= mat.length || c >= mat[0].length || mat[r][c] != -1)
        return false;
    mat[r][c] = value;
    return true;
}

let mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 0, 1]];
let result = updateMatrix(mat);
console.log(result);


