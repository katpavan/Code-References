/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    var result = [];
    for (let i in A) {
        if (A[i] % 2 == 0) result.unshift(A[i]);
        else result.push(A[i]);
    }
    return result;
};