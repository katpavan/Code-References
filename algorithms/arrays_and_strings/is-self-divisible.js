/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    var result = []
    for (var i = left; i <= right; i++) {
        if (isSelfDivisible(i)) result.push(i)
    }
    console.log(result)
    return result
};

var isSelfDivisible = function (num) {
    var mod = 10;
    var dem = 1;
    var digit = Math.floor(num % mod / dem);
    if (digit == 0) return false;
    while (digit !== 0) {
        if (num % digit !== 0) return false
        mod *= 10;
        dem *= 10;
        digit = Math.floor(num % mod / dem);
        if (digit == 0) return false;
    }
    return true
}