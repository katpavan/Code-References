function sockMerchant(n, ar) {
    var count = 0;
    var itemFreq = {};
    for (let i in ar) {
        itemFreq[ar[i]] = (itemFreq[ar[i]] || 0) + 1;
    }
    for (let i in itemFreq) {
        count += Math.floor(itemFreq[i] / 2);
    }
    return count;
}