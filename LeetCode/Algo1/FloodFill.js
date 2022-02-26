/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * * @param {number} ignoreDirection
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor, ignoreDirection) {


    let targetColor = image[sr][sc];
    if (targetColor == newColor)
        return image;
    image[sr][sc] = newColor;

    let newR, newC;
    //up = 1
    newR = sr - 1;
    newC = sc;
    if (ignoreDirection != 1 && newR >= 0 && image[newR][newC] == targetColor)
        floodFill(image, newR, newC, newColor, 3);
    // right = 2
    newR = sr;
    newC = sc + 1;
    if (ignoreDirection != 2 && newC < image[0].length && image[newR][newC] == targetColor)
        floodFill(image, newR, newC, newColor, 4);

    // down = 3
    newR = sr + 1;
    newC = sc;
    if (ignoreDirection != 3 && newR < image.length && image[newR][newC] == targetColor)
        floodFill(image, newR, newC, newColor, 1);

    // left = 4
    newR = sr;
    newC = sc - 1;
    if (ignoreDirection != 4 && newC >= 0 && image[newR][newC] == targetColor)
        floodFill(image, newR, newC, newColor, 2);

    return image;

};

var checkAndFill = function (image, newR, newC, targetColor, newColor) {
    if (newR < 0 || newR >= image.length || newC < 0 || newC >= image[0].length)
        return;
    if (image[newR][newC] == targetColor)
        floodFill(image, newR, newC, newColor);
}

let grid = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
let sr = 1;
let sc = 1;
let newColor = 2
let result = floodFill(grid, sr, sc, newColor);
console.log(result);