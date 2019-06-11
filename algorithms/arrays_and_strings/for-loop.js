
var matrix = [];
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        matrix[i, j] = Math.floor(Math.random() * 10);
    }
}

console.log(matrix);
