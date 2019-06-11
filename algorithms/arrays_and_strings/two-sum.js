var twoSum = function (nums, target) {
    // let pointerA = 0;
    // let pointerB = nums.length - 1;
    // let sum = nums[pointerA] + nums[pointerB];
    // while(!(sum===target)){
    //     if(sum>target) {
    //         pointerB--
    //     }else {
    //         pointerA++
    //     }
    //     sum = nums[pointerA] + nums[pointerB];

    var sum = 0;
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if (x === y) continue;
            sum = nums[x] + nums[y];
            if (sum === target) return [x, y]
        }
    }
}

//USING HASHMAP
function twoSum(arr, target) {
    var map = {};
    for (let i in arr) {
        if (map[arr[i]]) {
            return [map[arr[i]], i];
        } else {
            map[target - arr[i]] = i;
        }
    }
    return false;
}

Notes for later


