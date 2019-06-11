// https://leetcode.com/problems/number-of-islands/

/*
    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

    Example 1:

    Input:
    11110
    11010
    11000
    00000

    Output: 1

    Example 2:

    Input:
    11000
    11000
    00100
    00011

    Output: 3

    count = 0
    11000
    11000
    00100
    00011
        
        we find a 1 at the top left corner when i=0, j=0
            if i=0,j=0
                then we check to the right
                    i=0,j=1
                then we check to the bottom
                    i=1, j=0
            count = 1
                xx000
                xx000
                00100
                00011


        we find a 1 at i=2 and j=2
            count = 2
                xx000
                xx000
                00x00
                00011

        we find a 1 at i=3 and j=3
            count = 3
                xx000
                xx000
                00x00
                000xx

        then return the count 

            it's 3

*/


var test = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

var testTwo = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","1"]
];

//how to check for 0 islands
    //this is 0 islands
        // null

    //this is 0 islands
        // []

    //this is 0 islands
        // [
        //     [],
        //     [],
        //     [],
        //     []
        // ];

console.log('should return 1: ', numIslands(test));

console.log('should return 2: ', numIslands(testTwo));

function numIslands(grid) {
    //if there is no grid - then return 0 islands
    //if the grid has no rows - then return 0 islands
    //if the grid has no columns - then return 0 islands
    if(grid==null || grid.length==0 || grid[0].length==0) return 0;
 
    var m = grid.length; //num rows
    var n = grid[0].length; //num columns
 
    var count=0; //num islands
    for(var i=0; i < m; i++){ //loop through rows
        for(var j=0; j<n; j++){
            if(grid[i][j]=='1'){ //if we find land
                count++; //there's def an island
                merge(grid, i, j, m, n); //update the entire island from 1's to X's
            }
        }
    }
 
    return count;
}




function merge(grid, i, j, m, n){
    
    //we're making sure that we're not outside the grid
    if(i<0||i>=m||j<0||j>=n||grid[i][j] != '1') return;
    
    //turn the current 1 into an X
    grid[i][j] = 'X';
 
    merge(grid, i-1, j, m, n);
    merge(grid, i+1, j, m, n);
    merge(grid, i, j-1, m, n);
    merge(grid, i, j+1, m, n);
}






