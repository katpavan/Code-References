var sortedSquares = function (A) {
    var squaredArr = A.map(x => x ** 2)
    squaredArr.sort(function (a, b) { return a - b });
    return squaredArr;
};