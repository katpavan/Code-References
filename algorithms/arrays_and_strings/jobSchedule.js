// Given an array of jobs where every job has a deadline and associated profit if the job is finished before the deadline. It is also given that every job takes single unit of time, so the minimum possible deadline for any job is 1. How to maximize total profit if only one job can be scheduled at a time.

// Input: Four Jobs with following 
// deadlines and profits
// JobID  Deadline  Profit
//   a      4        20   
//   b      1        10
//   c      1        40  
//   d      1        30
// Output: Following is maximum 
// profit sequence of jobs
//         c, a   


// Input:  Five Jobs with following
// deadlines and profits
// JobID   Deadline  Profit
//   a       2        100
//   b       1        19
//   c       2        27
//   d       1        25
//   e       3        15
// Output: Following is maximum 
// profit sequence of jobs
//         c, a, e

//Order each job in descending order of profit
//Iterate through sorted list with incrementing time :
//if current job can be completed within deadline, add to result

function scheduleJob(jobs) {
    let sortedByProfit = jobs.sort((a, b) => b[2] - a[2]);
    let time = 1;
    let maxProfit = 0;
    let result = [];
    console.log(sortedByProfit)

    for (let i in sortedByProfit) {
        if (sortedByProfit[i][1] >= time) {
            result.push(sortedByProfit[i]);
            maxProfit += sortedByProfit[i][2];
            time++;
        }
    }
    result.push(maxProfit)
    return result
}

let arr1 = [['a', 2, 100],
['b', 1, 19],
['c', 2, 27],
['d', 1, 25],
['e', 3, 15],
['f', 4, 20]];
console.log(scheduleJob(arr1));

let arr2 = [
    ['a', 4, 20],
    ['b', 1, 10],
    ['c', 1, 40],
    ['d', 1, 30]];

console.log(scheduleJob(arr2));