/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    var curr = root;
    while (curr) {
        if (val > curr.val) {
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = new TreeNode(val)
                break
            }
        } else if (val < curr.val) {
            if (curr.left) {
                curr = curr.left;
            } else {
                curr.left = new TreeNode(val);
                break
            }
        }
    }
    return root;
};