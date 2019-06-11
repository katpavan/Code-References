var removeDuplicates = function (nums) {
    var p1 = 0;
    var p2 = 1;
    var count = 0;
    while (p2 < nums.length) {
        if (nums[p1] == nums[p2]) {
            p2++;
            count++;
        } else {
            var temp = nums[p1 + 1]
            nums[p1 + 1] = nums[p2];
            nums[p2] = temp;
            p1++;
            p2++;
        }
    }
    nums = nums.slice(0, (nums.length - count))
    return nums.length
};