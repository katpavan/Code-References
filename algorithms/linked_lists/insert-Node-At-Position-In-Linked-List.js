function insertNodeAtPosition(head, data, position) {
    var newNode = new SinglyLinkedListNode(data);
    if (position === 0) { newNode.next = head }
    else {
        var prevNode = head;
        var current = head;
        for (let i = 0; i < position; i++) {
            prevNode = current;
            current = current.next;
        }
        prevNode.next = newNode;
        newNode.next = current;
        return head;
    }
}