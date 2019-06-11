var lengthOfLongestSubstring = function (s) {
    var str = '';
    var posIndex = 0;
    var maxLen = 0;
    for (let i in s) {
        var temp = s[i];
        posIndex = str.indexOf(temp);

        if (posIndex > -1) str = str.slice(posIndex + 1);

        str += temp
        maxLen = Math.max(maxLen, str.length);
    }
    return maxLen;


};