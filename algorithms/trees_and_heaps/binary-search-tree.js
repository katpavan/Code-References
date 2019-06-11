class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    search(value){
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else {
                found = true;
            }
        }
        return current;
    }

    insert(value){
        if(value === this.root) return undefined;
        var newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        }else {
            var current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return;
                    }else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
    BFS(){
        var data = [],
           queue = [],
            node = this.root

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


/*
When to use which??
Depends! (Time complexity is the same for both)

If a tree is very wide (all the nodes have two nodes)
    - space complexity will be very bad because the queue has to store all nodes in the same level
    - use DFS for this type of tree
    - the queue will only be the current branch being searched and emptied for the next branch
If a tree is very long and narrow (not all the nodes have two nodes)
    - space complexity is worse for DFS if the branch is too deep
    
DFS : InOrder
    - Will order the nodes
    - Useful if you want order
DFS : PreOrder
    - Good for flattening the tree
    - "Clone" it for creating it again later
    - Easy to reconstruct
*/
