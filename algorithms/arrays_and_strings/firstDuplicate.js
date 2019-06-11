function firstDuplicate(a) {
    let numMap = {};
    for (let i in a) {
        if (numMap[a[i]]) return a[i];
        else numMap[a[i]] = 1;
    }
    return -1
}