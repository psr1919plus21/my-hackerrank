function compareTriplets(arrayA, arrayB) {
    let arrayAPoints = 0;
    let arrayBPoints = 0;

    arrayA.forEach(function(item, index) {
        if (item > arrayB[index]) {
            arrayAPoints++;
        } else if (item < arrayB[index]) {
            arrayBPoints++;
        }
    });

    return [arrayAPoints, arrayBPoints];
}