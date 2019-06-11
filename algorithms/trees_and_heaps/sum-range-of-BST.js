var rangeSumBST = function (root, L, R) {
    if (!root) return 0;
    var result = (root.val >= L && root.val <= R ? root.val : 0);
    return (rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)) + result;
};