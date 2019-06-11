var reverseList = function (head) {
    var node = head;
    var next;
    var prev = null;
    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    // while(prev){
    //     console.log(prev.val);
    //     prev = prev.next;
    // }
    return prev;
};