/*
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    var change = [0, 0, 0];
    for (var i in bills) {
        if (bills[i] === 5) {
            change[0]++;
        } else if (bills[i] === 10) {
            change[1]++;
            if (change[0] > 0) {
                change[0]--;
            } else {
                return false;
            }
        } else {
            change[2]++;
            if (change[0] > 0 && change[1] > 0) {
                change[0]--;
                change[1]--;
            } else if (change[0] > 2) {
                change[0] -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};