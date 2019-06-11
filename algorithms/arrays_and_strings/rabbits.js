// https://leetcode.com/problems/rabbits-in-forest/

// In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

// Return the minimum number of rabbits that could be in the forest.

// Examples:
// Input: answers = [1, 1, 2]
// Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit than answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Input: answers = [10, 10, 10]
// Output: 11

// Input: answers = []
// Output: 0
// Note:

// answers will have length at most 1000.
// Each answers[i] will be an integer in the range [0, 999].

let numRabbits = (answers) => {
    
    let map = [];
    
    for (let  i of answers) {
    	if (map[i]) map[i]++;
    	else map[i]=1;
    }

    // console.log('map', map);

    let res = 0;
    
    for (var i=0; i<map.length; i++) {
        if (map[i] > 0) {
        	res += Math.floor((map[i] + i) / (i + 1)) * (i + 1);

        	// console.log('i', i);
        	// console.log('map[i]', map[i]);
        	// console.log('Math.floor((map[i] + i) / (i + 1)) * (i + 1)', Math.floor((map[i] + i) / (i + 1)) * (i + 1));
        }    
    }
    
    return res;
};
console.log('numRabbits([0])', numRabbits([0]));
console.log('------------------------')

console.log('numRabbits([1, 1, 2])', numRabbits([1, 1, 2]));
console.log('------------------------')

console.log('numRabbits([10, 10])', numRabbits([10, 10]));
console.log('------------------------')

console.log('numRabbits([10, 10, 10])', numRabbits([10, 10, 10]));
console.log('------------------------')

console.log('numRabbits([0, 0, 1, 1, 1])', numRabbits([0, 0, 1, 1, 1]));

/*
	This question says that there are a bunch of rabbits in a forest, with different colors and answers to questions. 

	Each rabbit will tell you how many rabbits in the forest are the same color. 

	[1, 1, 2]

		2 cyan rabbits
		
		3 gold rabbits

	[10, 10, 10]

		1 blue rabbit

			10 other rabbits in the forest that are blue

		the next rabbit can be one of the 10 blue rabbits

		the next rabbit can be one of the 10 blue rabbits 


	[0, 0, 1, 1, 1]
		
		1 green rabbit

		1 yellow rabbit

		2 purple rabbits

		2 violet rabbits


	After analyzing these examples, 

		we can find that if a rabbit answers the number x, 

			then there are x+1 rabbits of the same color in the forest. 

			We allow x+1 rabbits to answer x at the same time. 




*/