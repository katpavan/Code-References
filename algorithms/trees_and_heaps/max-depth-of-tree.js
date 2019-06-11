/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    var currentLevel = 0;
    var allLevel = [];
    var node = root;
    function traverse(node, currentLevel){
        currentLevel++;
        if(node && node.left) traverse(node.left, currentLevel);
        if(node && node.right) traverse(node.right, currentLevel);
        allLevel.push(currentLevel);
    };
    traverse(node, currentLevel);
    console.log(allLevel);
    return Math.max(...allLevel);
};


//This solution uses recursion to perform a DFS and return the current level to an array
//The maximum value of this array is returned as the deepest level of the tree
//If the tree is empty, return 0;


//HERE IS ANOTHER RECURSIVE METHOD HOLY SHIT

var maxDepth = function(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
