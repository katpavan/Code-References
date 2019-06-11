/**
 * @param {number[]} nums
 * @return {number}
 */
//USING BIT MANIPULATION
var singleNumber = function (nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result
};

//USING FREQUENCY COUNTER

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var freqObj = {}
    for (let i in nums) {
        freqObj[nums[i]] = (freqObj[nums[i]] || 0) + 1;
    };
    for (let i in freqObj) {
        if (freqObj[i] === 1) return i;
    }
};

//USING SORT AND FOR LOOP
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a, b) => { return a - b });
    for (var i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) return nums[i]
    }
};