/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    var p1 = 0;
    var p2 = S.length - 1;
    var Sarr = S.split("")

    while (p1 < p2) {
        var isP1Letter = RegExp('[a-zA-Z]').test(Sarr[p1]);
        var isP2Letter = RegExp('[a-zA-Z]').test(Sarr[p2]);

        if (isP1Letter && isP2Letter) {
            var temp = Sarr[p1];
            Sarr[p1] = Sarr[p2];
            Sarr[p2] = temp;
            console.log(Sarr)
            p1++;
            p2--
        } else if (!isP1Letter) {
            p1++;
        } else if (!isP2Letter) {
            p2--;
        } else {
            p1++;
            p2--
        }
    }
    return Sarr.join("")
};

//terrible solution!