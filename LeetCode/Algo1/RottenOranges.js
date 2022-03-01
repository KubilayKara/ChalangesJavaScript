// https://leetcode.com/problems/rotting-oranges/

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    //find a zeros
    let rottenList = [];
    let freshList = [];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] == 2) {
                grid[r][c] = 0;
                rottenList.push({
                    row: r,
                    column: c
                });
            }
            else if (grid[r][c] == 1) {
                grid[r][c] = -1;
                freshList.push({
                    row: r,
                    column: c
                });
            }

        }
    }
    if (rottenList.length == 0)
        return -1;

    let max = visitNeighbours(grid, rottenList, 0);
    for (const i of freshList) {
        if (grid[i.row][i.column] == -1)
            return -1;
    }
    return max;

};

var visitNeighbours = function (mat, list, max) {

    if (list.length <= 0)
        return;

    let newList = [];
    for (const cell of list) {
        let c = cell.column;
        let r = cell.row;
        let val = mat[r][c] + 1;
        if (mat[r][c] > max)
            max = mat[r][c];
        //up
        markAndAddCell(newList, mat, r - 1, c, val);
        //down
        markAndAddCell(newList, mat, r + 1, c, val);
        //left
        markAndAddCell(newList, mat, r, c + 1, val);
        //right
        markAndAddCell(newList, mat, r, c - 1, val);
    }
    if (newList.length > 0) {
        max = visitNeighbours(mat, newList, max);
    }

    return max;
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

let mat = [[2, 1, 1], [0, 1, 1], [1, 0, 1]];
let result = orangesRotting(mat);
console.log(result);