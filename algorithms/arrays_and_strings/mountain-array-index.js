/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    for (var i = 0; i < A.length; i++) {
        if (A[i + 1] < A[i]) return i
    };
};