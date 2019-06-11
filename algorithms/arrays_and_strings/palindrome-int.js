var isPalindrome = function (x) {
    if (x < 0) return false
    var numsLength = Math.ceil(Math.log10(x));
    for (let i = 0; i < numsLength / 2; i++) {
        var firstNum = Math.floor(x % (10 ** (i + 1)) / 10 ** (i));
        var secNum = Math.floor(x % (10 ** ((numsLength) - i)) / 10 ** ((numsLength - 1) - i))
        if (firstNum !== secNum) return false
        console.log(firstNum, secNum);
    }
    return true;
};


isPalindrome(123454321);