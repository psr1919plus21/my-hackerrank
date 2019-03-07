
console.log(countApplesAndOranges(4, 8, 1, 9, [2, 4, -1, 3], [9, 3, 1]));

function countApplesAndOranges(
    houseLeft, 
    houseRight, 
    appleTreePosition, 
    orangeTreePosition, 
    fallenApples, 
    fallenOranges) {
        let applesInHouse = calculateFruitsOnHouse(fallenApples, appleTreePosition, houseLeft, houseRight);
        let orangesInHouse = calculateFruitsOnHouse(fallenOranges, orangeTreePosition, houseLeft, houseRight);
        
        return `${applesInHouse}\n${orangesInHouse}`;
};

function isOnHouse(fruitDiff, treePosition, houseLeft, houseRight) {
    const currentFruitPosition = treePosition + fruitDiff;
    return currentFruitPosition >= houseLeft && currentFruitPosition <= houseRight;
}

function calculateFruitsOnHouse(fallenFruits, treePosition, houseLeft, houseRight) {
    let fruitsOnHouse = 0;
    
    fallenFruits.forEach((fruitDiff) => {
        if (isOnHouse(fruitDiff, treePosition, houseLeft, houseRight)) {
            fruitsOnHouse++;
        }
    });

    return fruitsOnHouse;
}