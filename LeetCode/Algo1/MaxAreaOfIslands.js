/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {

            if (grid[r][c] == 1) {
                let area = exploreIsland(grid, r, c);
                if (area > max)
                    max = area;
            }
        }
    }
    return max;
};



var exploreIsland = function (grid, sr, sc, ignoreDirection) {
    grid[sr][sc] = 2;
    let area = 1;

    let newR, newC;
    //up = 1
    newR = sr - 1;
    newC = sc;
    if (ignoreDirection != 1 && newR >= 0 && grid[newR][newC] == 1)
        area += exploreIsland(grid, newR, newC);
    // right = 2
    newR = sr;
    newC = sc + 1;
    if (ignoreDirection != 2 && newC < grid[0].length && grid[newR][newC] == 1)
        area += exploreIsland(grid, newR, newC);

    // down = 3
    newR = sr + 1;
    newC = sc;
    if (ignoreDirection != 3 && newR < grid.length && grid[newR][newC] == 1)
        area += exploreIsland(grid, newR, newC);

    // left = 4
    newR = sr;
    newC = sc - 1;
    if (ignoreDirection != 4 && newC >= 0 && grid[newR][newC] == 1)
        area += exploreIsland(grid, newR, newC);

    return area;

};


let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];

let result = maxAreaOfIsland(grid);
console.log(result);