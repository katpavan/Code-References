var isPalindrome = function (x) {
    var int = x.toString();
    var pointerA = 0;
    var pointerB = int.length - 1;
    for (var i = 0; i < int.length / 2; i++) {
        if (int[pointerA] !== int[pointerB]) return false;
        pointerA++;
        pointerB--;
    }
    return true;
};