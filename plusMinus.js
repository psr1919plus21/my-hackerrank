const exampleArray = [0, 0, -1, 1, 1];

console.log(plusMinus(exampleArray));

function plusMinus(data) {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeros = 0;

    data.forEach((item) => {
        if (item === 0) {
            zeros++; 
        }

        if (item > 0) {
            positiveNumbers++; 
        }

        if (item < 0) {
            negativeNumbers++; 
        }
    });

    const positiveNumbersRatio = (positiveNumbers / data.length).toFixed(6);
    const negativeNumbersRatio = (negativeNumbers / data.length).toFixed(6);
    const zerosRatio = (zeros / data.length).toFixed(6);
    return positiveNumbersRatio + '\n' + negativeNumbersRatio + '\n' + zerosRatio;
}