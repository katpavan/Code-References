/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
    const result = [];
    const letterCountSubset = maxLetterCountOfSubset(B);
    for (let i in A) {
        let letterCountSet = maxLetterCountOfStr(A[i]);
        if (compareMainToSubset(letterCountSet, letterCountSubset)) result.push(A[i])
    }
    return result;
};

const compareMainToSubset = (arr1, arr2) => {
    for (let i in arr2) {
        if (arr2[i] > arr1[i]) return false;
    }
    return true;
}

const maxLetterCountOfSubset = (arr) => {
    let result = new Array(26).fill(0);
    for (let i in arr) {
        let letterCountOfStr = maxLetterCountOfStr(arr[i]);
        result = result.map((letter, i) => Math.max(letter, letterCountOfStr[i]));
    }
    return result;
}

const maxLetterCountOfStr = (arr) => {
    const letterCount = new Array(26).fill(0); // each index represents the lowercase letters
    for (let i in arr) {
        const a = "a".charCodeAt()
        let curr = arr[i].charCodeAt()
        letterCount[curr - a]++;
    }
    return letterCount
}

// Time 27%
// Space 35.61%