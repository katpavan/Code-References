function firstNotRepeatingCharacter(s) {
    let charMap = {};
    for (let i in s) {
        charMap[s[i]] = (charMap[s[i]] || 0) + 1;
    };

    for (let i in s) {
        if (charMap[s[i]] == 1) return s[i];
    }
    return '_'
}