/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (height.length === 2) return Math.min(height[0], height[1]);
    if (height.length < 2) return false;
    var max = Math.min(height[0], height[height.length - 1]) * (height.length - 1);
    var p1 = 0;
    var p2 = height.length - 1;
    while (p1 < p2) {
        if (height[p1] > height[p2]) p2--;
        else p1++
        max = Math.max(max, Math.min(height[p1], height[p2]) * (p2 - p1));
    }
    return max;
};