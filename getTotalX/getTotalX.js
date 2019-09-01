function getTotalX(a, b) {
    let deviders = [];
    let maxInA = a[a.length - 1];
    let currentDevider = maxInA;

    while(currentDevider <= b[0]) {
        const isDevidesForAllInA = a.every(function(item) {
            return (currentDevider % item) === 0;
        });

        const isDeviderForAllInB = b.every(function(item) {
            return (item % currentDevider) === 0;
        });

        if (isDevidesForAllInA && isDeviderForAllInB) {
            deviders.push(currentDevider);
        }

        currentDevider += maxInA;
    }
    
    return deviders.length;
}

module.exports = getTotalX;