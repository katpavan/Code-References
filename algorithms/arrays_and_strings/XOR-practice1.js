function checkMissingInt(original, missing) {
    result = 0;
    for (let i in original) {
        result ^= original[i];
    };
    for (let i in missing) {
        result ^= missing[i];
    };
    return result;
}

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y = [1, 2, 3, 4, 5, 7, 8, 9, 10];