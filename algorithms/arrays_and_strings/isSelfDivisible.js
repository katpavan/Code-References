const isDivisible = (num) => {
    if (num === 0) return false;
    let curr = num;
    while (curr > 1) {
        let digit = Math.floor(curr % 10);
        if (num % digit !== 0 || digit == 0) return false;
        curr /= 10;
    }
    return true
}

isDivisible(155555)