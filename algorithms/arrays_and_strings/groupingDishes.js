function groupingDishes(dishes) {
    const ingredientHash = {}
    const result = []
    for (let i in dishes) {
        for (let j = 1; j < dishes[i].length; j++) {
            if (ingredientHash[dishes[i][j]]) {
                ingredientHash[dishes[i][j]].push(dishes[i][0]);
            } else {
                ingredientHash[dishes[i][j]] = [dishes[i][0]];
            }
        }
    }

    for (let i in ingredientHash) {
        if (ingredientHash[i].length >= 2) {
            ingredientHash[i].sort().unshift(i)
            result.push(ingredientHash[i]);
        }
    }

    console.log(ingredientHash)
    return result.sort()
}