/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var temp, rev = 0, y = Math.abs(x);

    while (y != 0) {
        temp = y % 10;
        y = Math.floor(y / 10);
        rev = rev * 10 + temp;
    }

    rev = x < 0 ? rev * -1 : rev;

    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return rev;
    }
};