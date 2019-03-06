let exampleArray = [4, 5, 7, 2, 1];

console.log(miniMaxSum(exampleArray));

function miniMaxSum(data) {
    let min = 0;
    let max = 0;
    let sortedArray = data.slice().sort();

    sortedArray.forEach((item, index) => {
        if (index < 4) {
            min += item; 
        }

        if (index > 0) {
            max += item;
        }
    });


    return min + ' ' + max;
}