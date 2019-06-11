/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums[0] === nums[1] === 0) return [0, 0, 0];
    var result = [];
    var freqCount = {};
    nums.sort((a, b) => { return a - b });
    var curr = 0;
    while (nums[curr] <= 0) {
        var p1 = curr + 1;
        var p2 = nums.length - 1;

        while (p2 > p1 && p2 !== p1) {
            var sum = nums[p1] + nums[p2];
            if (sum > - nums[curr]) p2--;
            else if (sum < -nums[curr]) p1++;
            else if (sum === -nums[curr]) {
                var match = [nums[curr], nums[p1], nums[p2]]
                freqCount[match.toString()] = (freqCount[match.toString()] || match);
                p1++;
                p2--;
            }
        }
        curr++;
    }
    for (var i in freqCount) {
        result.push(freqCount[i]);
    }
    return result;
};