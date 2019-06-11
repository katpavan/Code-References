/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var bothNums = nums1.concat(nums2);
    bothNums.sort((a, b) => { return a - b });
    var length = bothNums.length;
    if (length % 2 !== 0) return bothNums[Math.floor(length / 2)];
    else return (bothNums[Math.floor(length / 2) - 1] + bothNums[Math.floor(length / 2)]) / 2;
};