var numJewelsInStones = function (J, S) {
    var sFreqObj = {};
    var sum = 0;
    for (let i in S) {
        sFreqObj[S[i]] = (sFreqObj[S[i]] || 0) + 1;
    }
    for (let i in J) {
        sum += (sFreqObj[J[i]] || 0);
    }
    return sum;
};