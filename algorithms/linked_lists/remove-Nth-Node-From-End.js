var removeNthFromEnd = function (head, n) {
    var prev = null;
    var node = head;
    var next = node.next;
    var tail = head;
    if (n === 0) {
        return undefined;
    } else if (n === 1) {
        while (node.next) {
            prev = node;
            node = node.next;
            next = node.next;
        }
        if (!prev && !node.next) {
            return null;
        } else if (!prev) {
            node.val = null;
        } else {
            prev.next = null;
        }
        return head;
    } else if (n === 2) {
        while (next.next) {
            prev = node;
            node = node.next;
            next = node.next;
        }
        if (!prev) {
            return next;
        } else {
            prev.next = next;
            return head;
        }
    } else {
        for (let i = 1; i < n; i++) {
            tail = tail.next;
        };
        while (tail.next) {
            prev = node;
            node = node.next;
            next = node.next;
            tail = tail.next;
        };
        if (!prev) {
            return next;
        } else {
            prev.next = next;
            return head;
        }
    }
};